import React from 'react'
import styled from 'styled-components'

import { colors, spacing } from '@auth0/cosmos-tokens'

import Paragraph from '../../atoms/paragraph'
import Link from '../../atoms/link'

const ArrowMore = styled.i`
  position: relative;
  left: 2px;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 0 4px 6px;
  border-color: transparent transparent transparent ${colors.link.default};
`
// Required to style hover from parent element
const StyledLink = styled(Link)``

export const StyledParagraph = styled(Paragraph)`
  /* 
  Components should not have margin by default.
  We'll remove this margin reset when we remove margins from the paragraph
  */
  margin: 0;
  grid-area: subtitle;

  &:hover ${ArrowMore} {
    border-color: transparent transparent transparent ${colors.link.defaultHover};
  }

  &:hover ${StyledLink} {
    color: ${colors.link.defaultHover};
  }
`

const Description = props => {
  return (
    <StyledParagraph>
      {props.children.text}{' '}
      {props.children.learnMore ? (
        <StyledLink href={props.children.learnMore}>
          Learn more <ArrowMore />
        </StyledLink>
      ) : null}
    </StyledParagraph>
  )
}

export default Description
