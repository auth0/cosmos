import React from 'react'
import Helmet from 'react-helmet'
import { metadata as components } from '@auth0/cosmos/meta/metadata.json'
import kebabCase from 'lodash.kebabcase'
import startCase from 'lodash.startcase'

import ComponentPage from './page'

export default props => {
  const componentName = props.match.params.componentName
  const component = components.filter(
    component => kebabCase(component.displayName) === componentName
  )[0]

  return (
    <div>
      <Helmet title={startCase(component.displayName) + ' — Cosmos'} />
      <ComponentPage documentation={component.documentation} component={component} />
    </div>
  )
}
