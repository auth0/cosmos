import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { fonts } from '../../tokens/'

const StyledTag = styled.span`
  background-color: red;
  display: inline-block;
  background-color: #777;
  border-radius: 10px;
  min-width: 10px;
  padding: 4px 8px;
  color: white;
  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;
  font-size: 13px;
  font-weight: ${fonts.weight.medium};
`

const Tag = props => {
  /* you can pass on all the props to the component like this */
  return <StyledTag>{props.text}</StyledTag>
}

Tag.propTypes = {
  text: PropTypes.string
}

Tag.defaultProps = {}

/* Finally, export the component */
export default Tag
