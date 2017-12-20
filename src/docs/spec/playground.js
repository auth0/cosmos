import React from 'react'
import styled from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import * as Components from '../../components'

const Half = styled.div`
  float: ${props => (props.left ? 'left' : 'right')};
  width: 50%;
  @media screen and (max-width: 699px) {
    & {
      width: 100%;
    }
  }
`

const Clear = styled.div`
  clear: both;
`

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
  & .prism-code {
    background: #20222b;
    overflow-x: auto;
    border-radius: 4px;
  }
  & .token.comment {
    color: #889aaf;
  }
  & .react-live-error {
    font-size: 13px;
    background: #d9675d;
    color: #fff;
    padding: 5px;
  }
`

const Playground = props => {
  const code = `<${props.component.displayName}/>`

  return (
    <Container>
      <LiveProvider code={code} scope={Components}>
        <Half>
          <LiveEditor />
        </Half>
        <Half>
          <LivePreview />
          <LiveError />
        </Half>
        <Clear />
      </LiveProvider>
    </Container>
  )
}

export default Playground
