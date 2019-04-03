import * as React from 'react'
import styled from '../styled'
import Paragraph from '../atoms/paragraph'

const StyledText = styled(Paragraph)`
  margin: 0;
`

const useStyledTextIfAppropiate = (children: React.ReactNode | string, useParagraph: boolean) => {
  const Wrapper = useParagraph ? StyledText : React.Fragment
  return <Wrapper>{children}</Wrapper>
}

export interface IFreeTextProps {
  text?: React.ReactNode | string
  children?: React.ReactNode
  useParagraph?: boolean
}

/**
 * Returns either a string with styles
 * or the raw text prop depending on its type.
 */
const FreeText = ({ text, children, useParagraph = false }: IFreeTextProps) => {
  if (children) {
    return useStyledTextIfAppropiate(children, useParagraph)
  }

  if (typeof text === 'string') {
    return useStyledTextIfAppropiate(text, useParagraph)
  }

  if (text) return <>text</>

  return null
}

export default FreeText
