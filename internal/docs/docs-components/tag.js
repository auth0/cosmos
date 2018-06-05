import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, fonts } from '@auth0/cosmos-tokens'

const StyledTag = styled.span`
  display: inline-block;
  color: ${props => (props.warning ? colors.base.orangeLighter : colors.base.gray)};
  border: 1px solid;
  border-color: ${props => (props.warning ? colors.base.orangeLighter : colors.base.gray)};
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
