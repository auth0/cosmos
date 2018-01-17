import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing } from '../../../tokens'
import { icons } from './icons.json'

const Icon = props => {
  // If the icon type isn't found, show a question mark instead.
  const icon = icons[props.type] || icons.help
  return (
    <Icon.Element
      width={props.size}
      height={props.size}
      viewBox={`0 0 ${icon.width} ${icon.height}`}
    >
      {icon.paths.map((path, index) => <path key={index} d={path} fill={props.color} />)}
    </Icon.Element>
  )
}

Icon.Element = styled.svg`
  display: inline-block;
  vertical-align: middle;
  margin-right: ${spacing.xsmall};
  :last-child {
    margin-right: 0;
  }
`

Icon.propTypes = {
  /** Icon type */
  type: PropTypes.string.isRequired,
  /** Icon size */
  size: PropTypes.number,
  /** Icon foreground color */
  color: PropTypes.string
}

Icon.defaultProps = {
  size: 20,
  color: colors.icon.default
}

export default Icon
