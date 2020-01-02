import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { findNodes } from '../../util/search'
import isArray from 'lodash/isArray'


function SearchResult({entity}) {
  return <div className="entity-search-entity">
           <a><b>{entity.display.name}</b></a>
         </div>
}


function SearchResults({results}) {
  return <div className="entity-search-results">
           {results.map(entity => <SearchResult entity={entity} key={entity.id} />) }
         </div>

}

export default function EntitySearch({ query }) {
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState()

  useEffect(() => {
    setLoading(true)

    findNodes(query)
      .then(json => {
        setLoading(false)
        setResults(json)
      })
      .catch(err => {
        setResults(false)
        console.error("Error finding nodes", err)
      })

  }, [query] )

  if (loading) {
    return <em>...loading...</em>
  } else if (isArray(results)) {
    return results.length === 0
      ? <em>no results</em>
      : <SearchResults results={results} />
  } else {
    let errorMsg = "Error searching for nodes"
    console.error(`${errorMsg}. Results = ${results}`)
    return <em>{errorMsg}</em>
  }
}

EntitySearch.propTypes = {
  query: PropTypes.string.isRequired
}