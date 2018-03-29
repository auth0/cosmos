import React from 'react'
import styled from 'styled-components'

import { spacing, colors, fonts } from '@auth0/cosmos/tokens'

const StyledPre = styled.pre`
  background-color: ${colors.grayLightest};
  border-radius: 3px;
  padding: ${spacing.small};
  margin: 2em 0;
  color: ${colors.text.default};
  font-family: ${fonts.family.code};
  font-size: 90%;
  background-color: ${colors.base.blueLightest};
  line-height: 18px;
`

const Pre = props => {
  /* you can pass on all the props to the component like this */
  return <StyledPre {...props}>{props.children || props.code}</StyledPre>
}

Pre.propTypes = {}

Pre.defaultProps = {}

export default Pre
