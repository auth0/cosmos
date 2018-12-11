import React from 'react'
import styled from '@auth0/cosmos/styled'
import Paragraph from '../atoms/paragraph'

/**
 * Returns either a string with styles
 * or the raw text prop depending on its type.
 */
const FreeText = ({ text, children, useParagraph = false }) => {
  if (children) {
    if (useParagraph) return <Paragraph margin={{ top: 0, bottom: 0 }}>{children}</Paragraph>
    return children
  }

  if (typeof text === 'string') {
    if (useParagraph) return <Paragraph>{text}</Paragraph>
    return text
  }

  if (text) return text

  return null
}

export default FreeText
