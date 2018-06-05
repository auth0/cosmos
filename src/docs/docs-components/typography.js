import styled from 'styled-components'

import { colors, fonts } from '@auth0/cosmos/tokens'

const Heading1 = styled.h1`
  margin: 1em 0 0.5em 0; /* reset browser default */
  color: ${colors.text.black};
  font-size: 36px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.normal};
`

const Heading2 = styled.h2`
  font-size: 24px;
  line-height: 1.4em;
  font-weight: ${fonts.weight.medium};
  margin: 1.6em 0 0.6em;
  color: ${colors.text.black};
`

const Heading3 = styled.h3`
  margin: 1.6em 0 0.6em; /* reset browser default */
  color: ${colors.text.black};
  font-size: 19px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.medium};
`

const Heading4 = styled.h4`
  margin: 1em 0 1em 0; /* reset browser default */
  color: ${colors.text.black};
  font-size: 16px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.bold};
`

const Subheader = styled.h6`
  margin: 1em 0 1em 0; /* reset browser default */
  color: ${colors.text.secondary};
  font-size: 21px;
  font-weight: ${fonts.weight.normal};
`

const Text = styled.div`
  color: #414141;
  font-size: 15px;
  line-height: 26px;
  font-weight: ${fonts.weight.normal};
  margin: 1em 0;
`

const ListItem = styled.li`
  color: #414141;
  font-size: 15px;
  line-height: 26px;
  font-weight: ${fonts.weight.normal};
`

const List = styled.ul`
  list-style: square;
  margin: 1em 0;
  margin-left: 1.5em;
`

const Link = styled.a`
  color: ${colors.link.default};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export { Heading1, Heading2, Heading3, Heading4, Subheader, Text, Link, List, ListItem }
