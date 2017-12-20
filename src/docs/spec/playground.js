import React from 'react'
import styled from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import * as Components from '../../components'
import { fonts, colors, spacing } from '../../tokens'

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: ${spacing.small} 0 ${spacing.xlarge};

  & .prism-code {
    padding: ${spacing.small} ${spacing.medium};
    background: #20222b;
    overflow-x: auto;
    font-family: ${fonts.family.code};
    border: 1px solid ${colors.grayLightest};
    border-top: 0;
    border-radius: 0 0 4px 4px;
  }
  & .react-live-preview {
    border: 1px solid ${colors.grayLightest};
    border-bottom: 0;
    border-radius: 4px 4px 0 0;
    padding: 20px;
  }
  & .react-live-error {
    color: ${colors.orange};
    padding: 5px;
  }
`

const Playground = props => {
  const code = props.children

  return (
    <Container>
      <LiveProvider code={code} scope={Components}>
        <LivePreview />
        <LiveError />
        <LiveEditor />
      </LiveProvider>
    </Container>
  )
}

export default Playground
