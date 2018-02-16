import React from 'react'
import Helmet from 'react-helmet'
import { metadata as components } from '../metadata.json'

import Example from './example'

export default props => {
  const componentName = props.match.params.componentName
  const component = components.filter(component => component.displayName === componentName)[0]

  return (
    <div>
      <Helmet title={component.displayName + ' — Cosmos'} />
      <Example documentation={component.documentation} component={component} />
    </div>
  )
}
