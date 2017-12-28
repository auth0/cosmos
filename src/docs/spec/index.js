import React from 'react'
import styled from 'styled-components'

import { metadata as components } from '../metadata.json'
import documentations from '../docs-loader'

import { Heading3, Subheader } from '../../components'
import Example from './example'

const Container = styled.div`
  height: 100vh;
`

export default props => {
  const componentName = props.match.params.componentName

  const component = components.filter(component => component.displayName === componentName)[0]
  const docs = documentations.filter(d => d.name === componentName)[0]

  return (
    <Container>
      <Heading3>{component.displayName}</Heading3>
      <Subheader>{component.description || 'Description missing!'}</Subheader>
      <Example docs={docs} component={component} />
    </Container>
  )
}
