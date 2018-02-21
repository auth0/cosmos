import React from 'react'
import styled from 'styled-components'

import { colors } from '../../../tokens'

import Paragraph from '../../atoms/paragraph'

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

const Link = styled.a`
  color: ${colors.link.default};
  text-decoration: none;
`

const Description = props => {
  return (
    <Paragraph>
      {props.children.text}{' '}
      {props.children.learnMore ? (
        <Link href={props.children.learnMore}>
          Learn more<ArrowMore />
        </Link>
      ) : null}
    </Paragraph>
  )
}

export default Description
