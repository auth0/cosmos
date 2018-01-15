import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors } from '../../../tokens'
import { icons } from './icons.json'

const Icon = props => {
  const icon = icons[props.type] || icons.connections // TODO: Choose a real "unknown" icon
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
