import React from 'react'
import styled from 'styled-components'

import { spacing, colors } from '../../../tokens'
import Code from '../../atoms/code'

const StyledDescription = styled.div`
  font-size: 13px;
  line-height: 1.7;
  color: ${colors.text.secondary};
  margin-top: ${spacing.xsmall};
  margin-bottom: ${spacing.xsmall};
`

const Description = props => {
  if (typeof props.children === 'string') {
    /*
      if children is a string, replace instances of
      `hash` with <Code>hash</Code>
    */

    /*
      split the string into parts
      example: 'use the `copy` prop'
      becomes: ['use the ', 'copy', ' prop']
    */
    const parts = props.children.split('`')

    /*
      loop through and add <Code>...</Code> wrapper around
      the correct elements
    */
    for (let i = 1; i < parts.length; i += 2) {
      parts[i] = <Code key={i}>{parts[i]}</Code>
    }

    return <StyledDescription>{parts}</StyledDescription>
  } else {
    // if children is not a string, proxy it through
    return <StyledDescription>{props.children}</StyledDescription>
  }
}

export default Description
