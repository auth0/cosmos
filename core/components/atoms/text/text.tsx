import * as React from 'react'
import styled from '@auth0/cosmos/styled'
import Automation from '../../_helpers/automation-attribute'

import { colors, fonts } from '@auth0/cosmos-tokens'

type TextType = 'allcaps' | 'subdued' | 'strong'

export interface ITextProps {
  /** HTML ID of the component */
  id?: string
  type?: TextType
  children?: React.ReactNode
  onClick?: Function
}

const resolveTextComponent = (type: TextType) => {
  switch (type) {
    case 'subdued':
      return Text.Subdued
    case 'allcaps':
      return Text.AllCaps
    case 'strong':
      return Text.Strong
    default:
      return null
  }
}

const Text = (props: ITextProps) => {
  const TextComponent = resolveTextComponent(props.type)

  if (!TextComponent) return <>{props.children}</>

  return <TextComponent {...Automation('text')} {...props} />
}

Text.Subdued = styled.span`
  color: ${colors.text.secondary};
  font-size: 13px;
  font-weight: ${fonts.weight.normal};
`

Text.AllCaps = styled.span`
  font-size: 12px;
  color: ${colors.text.secondary};
  letter-spacing: 1px;
  text-transform: uppercase;
`

Text.Strong = styled.strong`
  font-weight: ${fonts.weight.bold};
`

Text.defaultProps = {}

export default Text

const StyledTextAllCaps = Text.AllCaps
const StyledTextSubdued = Text.Subdued
const Strong = Text.Strong

export { StyledTextAllCaps, StyledTextSubdued, Strong }
