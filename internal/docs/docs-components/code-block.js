import React from 'react'
import styled from 'styled-components'

import Highlight from 'react-highlight'
import './material-theme.css'

const Wrapper = styled.div`
  margin: 16px 0;
  code {
    border-radius: 5px;
    padding: 16px;
  }
`

const CodeBlock = props => {
  return (
    <Wrapper>
      <Highlight className={props.language}>{props.children.trim()}</Highlight>
    </Wrapper>
  )
}

export default CodeBlock
