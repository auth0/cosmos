import React from 'react'
import PropTypes from 'prop-types'
import CosmosContext from './cosmos-context'

const Provider = props => (
  <CosmosContext.Provider value={props.config}>{props.children}</CosmosContext.Provider>
)

Provider.propTypes = {
  config: PropTypes.shape({
    onNavigate: PropTypes.func
  })
}

export default Provider
