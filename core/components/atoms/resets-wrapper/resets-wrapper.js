import React from 'react'
import styled from 'styled-components'

import { fonts, misc } from '@auth0/cosmos-tokens'

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  strong,
  em {
    font-weight: ${fonts.weight.bold};
  }

  body,
  input,
  textarea,
  button,
  select {
    font-family: ${fonts.family.text};
    font-weight: ${fonts.weight.normal};
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Cosmos globals */
  [class^='sc-'] {
    line-height: ${misc.lineHeight};
  }
`

const ResetsWrapper = props => <Wrapper>{props.children}</Wrapper>

export default ResetsWrapper
