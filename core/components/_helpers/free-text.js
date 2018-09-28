import React from 'react'
import styled from 'styled-components'
import Paragraph from '../atoms/paragraph'

const StyledText = styled(Paragraph)`
  margin: 0;
`

/**
 * Returns either a string with styles
 * or the raw text prop depending on its type.
 */
const FreeText = ({ text, children, useParagraph = false }) => {
  if (children) {
    if (useParagraph) return <StyledText>{children}</StyledText>
    return children
  }

  if (typeof text === 'string') {
    if (useParagraph) return <StyledText>{text}</StyledText>
    return text
  }

  if (text) return text

  return null
}

export default FreeText
