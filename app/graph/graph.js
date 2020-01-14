import at from 'lodash/at'
import curry from 'lodash/curry'
import filter from 'lodash/filter'
import isNumber from 'lodash/isNumber'
import merge from 'lodash/merge'
import omit from 'lodash/omit'
import values from 'lodash/values'

import { translatePoint, rotatePoint, distance } from '../util/helpers'
import { newNode } from './node'
import { edgeCoordinates } from './edge'
import { calculateGeometry } from './curve'

import nodeDisplaySetting from '../NodeDisplaySettings'

const GRAPH_PADDING = 100
const DEFAULT_VIEWBOX = { minX: -200, minY: -200, w: 400, h: 400 }

const DEFAULT_GRAPH = {
  nodes: {},
  edges: {},
  captions: {},
  viewBox: null,
  actualZoom: null,
  zoom: 1
}

////////////////////////
/// Helper Functions  //
////////////////////////

// Allows functions to accept a node object or an id.
// For example: 400, "400", and { id: 400 } all return "400"
// Often used like this: ` this.graph.nodes[getId(node)] `
export function getId(thing) {
  if (typeof thing === 'string') {
    return thing
  } else if (typeof thing === 'object') {
    if (thing.id) {
      return getId(thing.id)
    } else {
      throw new Error("getId() failed: the object does not have the property 'id'")
    }
  } else if (typeof thing === 'number') {
    return thing.toString()
  } else {
    throw new Error("getId() only accepts Strings, Objects, and numbers")
  }
}

// Which node (node 1 or node 2) is the node of the edge -- can be either 1 or 2
export function determineNodeNumber({edge, node}) {
  const nodeId = getId(node)

  if (edge.node1_id.toString() === nodeId) {
    return 1
  } else if (edge.node2_id.toString() === nodeId) {
    return 2
  } else {
    throw new Error("Edge is not connected to the node")
  }
}

function edgeAngle(edge) {
  Math.atan2(edge.y2 - edge.y1, edge.x2 - edge.x1)
}

// All of these functions take `graph` as the first argument
// Note that many of these functions will mutate `graph`

//////////////////////////////////////
// Stats, Getters, and Calculations //
/////////////////////////////////////

const minNodeX = nodes => Math.min(...nodes.map(n => n.x))
const minNodeY = nodes => Math.min(...nodes.map(n => n.y))
const maxNodeX = nodes => Math.max(...nodes.map(n => n.x))
const maxNodeY = nodes => Math.max(...nodes.map(n => n.y))

// TODO: Nodes with LittleSis IDs

export function stats(graph) {
  const nodes = values(graph.nodes)

  return {
    nodeCount: nodes.length,
    edgeCount: values(graph.edges).length,
    minNodeX:  minNodeX(nodes),
    minNodeY:  minNodeY(nodes),
    maxNodeX:  maxNodeX(nodes),
    maxNodeY:  maxNodeY(nodes)
  }
}

// output: { minX, minY, w, h }
// These values are used to create the viewBox attribute for the outermost SVG
// Unless we are zoomed in or out, the extent is a box where all the nodes are visible
export function calculateViewBox(graph) {
  const zoom = graph.zoom
  const graphStats = stats(graph)

  if (graphStats.nodeCount === 0) {
    return DEFAULT_VIEWBOX
  }

  const minX = graphStats.minNodeX - GRAPH_PADDING
  const minY = graphStats.minNodeY - GRAPH_PADDING
  const w = (graphStats.maxNodeX - graphStats.minNodeX) + (GRAPH_PADDING * 2)
  const h = (graphStats.maxNodeY - graphStats.minNodeY) + (GRAPH_PADDING * 2)

  // We can return here if the zoom is 1
  if (zoom === 1) {
    return { minX, minY, w, h }
  }

  // Update viewBox according to zoom settings
  const zoomW = w / zoom
  const zoomH = h / zoom
  const zoomMinX = minX + (w / 2) - (zoomW / 2)
  const zoomMinY = minY + (h / 2) - (zoomH / 2)

  return {
    minX: zoomMinX,
    minY: zoomMinY,
    w: zoomW,
    h: zoomH
  }
}

export function calculateCenter(graph) {
  const vb = calculateViewBox(graph)
  const x = vb.minX + (vb.w / 2)
  const y = vb.minY + (vb.h / 2)
  return { x, y }
}

export const getNode = (graph, nodeId) => graph.nodes[getId(nodeId)]
export const getEdge = (graph, edgeId) => graph.nodes[getId(edgeId)]

export function edgesOf(graph, node) {
  return filter(
    values(graph.edges),
    edge => edge.node1_id == getId(node) || edge.node2_id == getId(node)
  )
}

export function nodesOf(graph, edge) {
  const nodeIds = at(graph.edges[getId(edge)], ['node1_id', 'node2_id'])
  return nodeIds.map(nodeId => graph.nodes[nodeId])
}

/////////////////////////////
// Update parts of graph  //
///////////////////////////

// These all *mutate* graph and then return it

export function addNode(graph, attributes) {
  let node = newNode(attributes)

  // Place the node at the graph center, unless coordinates are provided
  if (!(isNumber(node.x) && isNumber(node.y))) {
    merge(node, calculateCenter(graph))
  }

  graph.nodes[getId(node)] = node
  return graph
}

export function addNodes(graph, nodes) {
  nodes.forEach(node => addNode(graph, node))
  return graph
}

export function removeNode(graph, node) {
  delete graph.nodes[getId(node)]
  return graph
}

// Updates the attributes object of a node.
export function updateNode(graph, node, attributes) {
  merge(graph.nodes[getId(node)], attributes)
  return graph
}

export function addEdge(graph, edge) {
  graph.edges[edge.id] = edge
  return graph
}

export function addEdges(graph, edges) {
  edges.forEach(edge => addEdge(graph, edge))
  return graph
}

export function removeEdge(graph, edge) {
  delete graph.edges[getId(edge)]
  return graph
}

export function updateEdge(graph, edge, attributes) {
  merge(graph.edges[getId(edge)], attributes)
  return graph
}

/////////////////////////
// Dragging Functions  //
/////////////////////////

// Moves a node to new position,
export function moveNode(graph, node, deltas) {
  const newPosition = translatePoint(getNode(graph, node), deltas)
  merge(graph.nodes[getId(node)], newPosition)
  return graph
}

// See `Graph.moveEdgeNode` in legacy code
export function updateEdgeOffset(oldEdge, newEdge) {
  const deltaAngle = edgeAngle(newEdge) - edgeAngle(oldEdge)
  const geometry = calculateGeometry(oldEdge)
  const rotatedPoint = rotatePoint({x: geometry.cx, y: geometry.cy }, deltaAngle)
  return {...newEdge, cx: rotatedPoint.x, cy: rotatedPoint.cy }
}

// This updates an edge's curve when one of it's nodes has moved
export function dragNodeEdge(graph, {edge, node, coordinates}) {
  merge(graph.edges[edge.id],
        edgeCoordinates(determineNodeNumber({ edge, node }), coordinates))
  return graph
}

// dragNode() updates the connected edges (if any)
// It does not change the coordinates of the node itself, which is the done by moveNode()
export function dragNode(graph, nodeId, deltas) {
  const node = getNode(graph, nodeId)
  const coordinates = translatePoint(node, deltas) // x,y of location of new node
  edgesOf(graph, node.id).forEach(edge => dragNodeEdge(graph, {edge, node, coordinates}))
  return graph
}

export function dragEdge(graph, edge) {
  throw new Error("Not Yet Implemented")
}

// {x,y}, {x,y} ---> Boolean
function intersects(coordinates, node) {
  const padding = 20
  const radius = (nodeDisplaySetting.circleRadius * node.scale) + padding
  return distance(node, coordinates) <= radius
}

// Returns the intersecting node (including a hard-coded buffer radius)
// If there are no intersections, this returns undefined
export function intersectingNode(graph, coordinates, selfId = null) {
  return values(omit(graph.nodes, selfId)).find(curry(intersects)(coordinates))
}

export function intersectingNodeFromDrag(graph, nodeId, deltas) {
  return intersectingNode(
    graph,
    translatePoint(getNode(graph, nodeId), deltas),
    nodeId
  )
}

///////////////////////
// View Box and Zoom //
//////////////////////

export function updateViewBox(graph) {
  graph.viewBox = calculateViewBox(graph)
  return graph
}

export function setZoom(graph, zoomLevel) {
  throw new Error("Not Yet Implemented")
}


// Creates a new graph object
// Available as Graph.new() and typically used to create a new empty graph
export function newGraph(attributes = {}) {
  let g = merge({}, DEFAULT_GRAPH, attributes)
  updateViewBox(g)
  return g
}

export default {
  "new":                        newGraph,
  "stats":                      stats,
  "edgesOf":                    edgesOf,
  "nodesOf":                    nodesOf,
  "getNode":                    getNode,
  "getEdge":                    getEdge,
  "calculateViewBox":           calculateViewBox,
  "addNode":                    addNode,
  "addNodes":                   addNodes,
  "removeNode":                 removeNode,
  "updateNode":                 updateNode,
  "addEdge":                    addEdge,
  "addEdges":                   addEdges,
  "removeEdge":                 removeEdge,
  "updateEdge":                 updateEdge,
  "moveNode":                   moveNode,
  "dragNode":                   dragNode,
  "dragEdge":                   dragEdge,
  "intersectingNode":           intersectingNode,
  "intersectingNodeFromDrag":   intersectingNodeFromDrag,
  "updateViewBox":              updateViewBox,
  "setZoom":                    setZoom
}
