const defaultState = {
  // Core graph components
  // See app/models for the schema of each component
  graph: {
    nodes: {},
    edges: {},
    captions: {}
  },

  // Graph attributes and metadata
  // Some attributes are editable in the graph header.
  attributes: {
    id: null,
    title: null,
    subtitle: null,
    date: null,
    oligrapher_version: 3,
    user: null,
    owner: null,
    // These are rendered in the Header Menu
    links: [],
    // will be displayed in editor mode. It is used by LittleSis.org
    // to create additional buttons that set various map privacy settings.
    settings: {
      "private": false,
      clone: true,
      defaultStoryMode: false,
      defaultExploreMode: true,
      storyModeOnly: false,
      exploreModeOnly: false,
      automaticallyAddEdges: true
    },
    editors: [],
    lock: { 
      locked: false, 
      user_has_lock: true,
      name: null
    }
  },

  // This section of the state is not sync'd with the server;
  // it mostly used internally to implement the editor UI.
  // Many actions trigger a reconfiguration of these menus
  display: {
    zoom: 1,
    svgZoom: null,
    actualZoom: 1,
    viewBox: null,
    svgSize: null, // { width: 500, height: 500 },
    svgOffset: null,
    offset: { x: 0, y: 0 },
    headerIsCollapsed: false,
    modes: {
      editor: false,
      story: false
    },
    selectedNodes: new Set(),
    floatingEditor: {
      type: null, // node, connections, edge, caption
      id: null
    },
    draggedNode: null,
    draggedOverNode: null,
    tool: null, // text, settings
    saveMapStatus: null, // states: null, 'REQUESTED', 'SUCCESS', 'FAILED'
    cloneMapStatus: null, // states: null, 'REQUESTED', 'SUCCESS', 'FAILED'
    deleteMapStatus: null // states: null, 'REQUESTED', 'SUCCESS', 'FAILED'
  },

  // Global settings
  // These settings are NOT changable via the settings interface;
  // those are located at above under attributes.settings
  settings: {
    dataSource: 'littlesis',
    debug: false,
    domId: 'oligrapher',
    embedded: false,
    editable: true,
    saveable: true,
    storyable: true,
    draggableNodes: true,
    draggableEdges: true
  }
}

export default Object.freeze(defaultState)
