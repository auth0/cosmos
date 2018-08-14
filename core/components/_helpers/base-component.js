import styled from 'styled-components'

const BaseComponent = styled.div`
  box-sizing: border-box;
  line-height: ${misc.lineHeight};

  strong&,
  strong,
  em&,
  em {
    font-weight: ${fonts.weight.bold};
  }

  input&,
  input,
  textarea&,
  textarea,
  button&,
  button,
  select&,
  select {
    font-family: ${fonts.family.text};
    font-weight: ${fonts.weight.normal};
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default BaseComponent
