import React from 'react'
import styled from 'styled-components'
import Paragraph from '../atoms/paragraph'

const Text = styled(Paragraph)`
  margin: 0;
`

/**
 * Returns either a string with styles
 * or the raw text prop depending on its type.
 */
export function renderText(text, children, { useParagraph = false } = {}) {
  if (children) {
    if (useParagraph) return <Text>{children}</Text>
    return children
  }

  if (typeof text === 'string') {
    if (useParagraph) return <Text>{text}</Text>
    console.log({ useParagraph })
    return text
  }

  return text
}
