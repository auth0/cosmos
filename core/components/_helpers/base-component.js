import styled from 'styled-components'
import { fonts, misc } from '@auth0/cosmos-tokens'

const BaseComponent = styled.div`
  box-sizing: border-box;
  line-height: ${misc.lineHeight};
  font-family: ${fonts.family.text};

  font-weight: ${fonts.weight.normal};
  font-weight: inherit;

  font-size: 14px;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  strong&,
  em& {
    font-weight: ${fonts.weight.bold};
  }
`

export default BaseComponent
