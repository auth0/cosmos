import styled, { injectGlobal } from 'styled-components'

import { colors, fonts, misc } from '../../tokens'

const Heading1 = styled.h1`
  margin: 1em 0 1em 0; /* reset browser default */
  color: ${colors.text.black};
  font-size: 36px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.normal};
`

const Heading2 = styled.h2`
  margin: 1.5em 0 0.75em 0; /* reset browser default */
  color: ${colors.text.black};
  font-size: 24px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.medium};
`

const Heading3 = styled.h3`
  margin: 1em 0 1em 0; /* reset browser default */
  color: ${colors.text.default};
  font-size: 18px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.bold};
`

const Subheader = styled.h6`
  margin: 1em 0 1em 0; /* reset browser default */
  color: ${colors.text.secondary};
  font-size: 21px;
  font-weight: ${fonts.weight.normal};
`

const Text = styled.p`
  color: #414141;
  font-size: 16px;
  line-height: 26px;
  font-weight: ${fonts.weight.normal};
  margin-bottom: 1em;
`

export { Heading1, Heading2, Heading3, Subheader, Text }
