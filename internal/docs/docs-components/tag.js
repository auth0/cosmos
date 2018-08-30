import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, fonts } from '@auth0/cosmos-tokens'

const getColor = props => {
  if (props.warning) return colors.base.orangeLighter
  else if (props.error) return colors.base.red
  else return colors.base.gray
}

const StyledTag = styled.span`
  display: inline-block;
  color: ${props => getColor(props)};
  border: 1px solid;
  border-color: ${props => getColor(props)};
  border-radius: 5px;
  min-width: 10px;
  padding: 4px 8px;
  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;
  font-size: 13px;
  font-weight: ${fonts.weight.medium};
`

const Tag = props => {
  /* you can pass on all the props to the component like this */
  return <StyledTag {...props}>{props.text}</StyledTag>
}

Tag.propTypes = {
  text: PropTypes.string
}

Tag.defaultProps = {}

/* Finally, export the component */
export default Tag
