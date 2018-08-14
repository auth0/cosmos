import styled from 'styled-components'
import { fonts, misc } from '@auth0/cosmos-tokens'

const BaseComponent = styled.div`
  box-sizing: border-box;
  line-height: 1.6;

  strong&,
  em& {
    font-weight: ${fonts.weight.bold};
  }

  input&,
  textarea&,
  button&,
  select& {
    font-family: ${fonts.family.text};
    font-weight: ${fonts.weight.normal};
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default BaseComponent
