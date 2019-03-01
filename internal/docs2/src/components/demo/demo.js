import React from 'react'
import styled from 'styled-components'

import metadataContext from '../../templates/metadata-context'

const Wrapper = styled.div`
  background-color: red;
  height: 100px;
  width: 100%;
`

const Demo = props => (
  <metadataContext.Consumer>
    {metadata => {
      const component = metadata.find(c => c.displayName === props.of)

      return (
        <Wrapper>
          {component.displayName}
          {props.children}
        </Wrapper>
      )
    }}
  </metadataContext.Consumer>
)

export default Demo
