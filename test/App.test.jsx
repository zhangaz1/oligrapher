import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import { Root } from '../app/containers/Root'
import { bigGraph } from './testData'
import { createOligrapherStore } from '../app/util/render'
import stateInitializer from '../app/util/stateInitalizer'

describe('Oligrapher', function() {
  let state, store, container

  beforeEach(function() {
    state = stateInitializer({ 
      graph: bigGraph,
      attributes: {
        title: 'test graph',
        user: { name: 'bozo', url: 'http://example.com' }
      },
      display: {
        modes: { editor: true }
      }
    })

    store = createOligrapherStore(state)
    
    container = render(
      <Provider store={store}>
        <Root />
      </Provider>
    ).container
  })

  it('shows title', function() {
    const title = container.querySelectorAll('#oligrapher-title')
    expect(title).to.have.lengthOf(1)
  })

  it('shows user', function() {
    const userLink = container.querySelector('#oligrapher-attribution-user a')
    expect(userLink.innerHTML).to.equal('bozo')
    expect(userLink.href).to.contain('http://example.com')
  })

  it('shows nodes', function() {
    const nodes = container.querySelectorAll('.oligrapher-node')
    expect(nodes).to.have.lengthOf(Object.keys(state.graph.nodes).length)
  })

  it('shows edges', function() {
    const edges = container.querySelectorAll('.oligrapher-edge')
    expect(edges).to.have.lengthOf(Object.keys(state.graph.edges).length)
  })

  it('opens and closes node tool', function() {
    let nodeTool = container.querySelectorAll('.nodetool')
    expect(nodeTool).to.have.lengthOf(0)
    fireEvent.click(container.querySelector('.editor-menu-item'))
    nodeTool = container.querySelectorAll('.nodetool')
    expect(nodeTool).to.have.lengthOf(1)
    fireEvent.click(container.querySelector('.editor-menu-item'))
    nodeTool = container.querySelectorAll('.nodetool')
    expect(nodeTool).to.have.lengthOf(0)
  })

  it('opens node editor', async function() {
    const handle = container.querySelector('.draggable-node-handle')

    // react-draggable listens to mousedown and mouseup instead of click
    fireEvent.mouseDown(handle)
    fireEvent.mouseUp(handle, { bubbles: false }) 
    // unclear why bubbles: false is necessary above, 
    // but without it draggable's onmouseup gets called twice,
    // (unlike in real browser interaction), and the node editor 
    // gets toggled twice and thus disappears

    const editor = container.querySelectorAll('.oligrapher-node-editor')
    expect(editor).to.have.lengthOf(1)
    const label = container.querySelector('.oligrapher-node .node-label')
    const input = container.querySelector('.oligrapher-node-editor input')
    expect(input.value.replace(/\s/g, '')).to.equal(label.textContent.replace(/\s/g, ''))
  })
  
  it('opens edge editor', function() {
    const handle = container.querySelector('.edge-handle')

    // see comment for node editor click
    fireEvent.mouseDown(handle)
    fireEvent.mouseUp(handle, { bubbles: false }) 

    const editor = container.querySelectorAll('.oligrapher-edge-editor')
    expect(editor).to.have.lengthOf(1)
    const label = container.querySelector('.oligrapher-edge .edge-label')
    const input = container.querySelector('.oligrapher-edge-editor input')
    expect(input.value).to.equal(label.textContent)
  })
})