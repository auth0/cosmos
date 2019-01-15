import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'

import { colors } from '@auth0/cosmos-tokens'
import { icons } from './icons.json'
import Automation from '../../_helpers/automation-attribute'
import customIcon from '../../../../assets/icon-custom.svg'

const Icon = props => {
  // If the icon name isn't found, show a question mark instead.
  const icon = icons[props.name] || icons.help

  // Use an icon name from tokens, fallback to hexcode (without validation)
  const color = colors.base[props.color] || props.color
  console.log({ props })
  return (
    <Icon.Element {...Automation('icon')} {...props}>
      {props.name && (
        <SVGImage
          width={props.size}
          height={props.size}
          viewBox={`0 0 ${icon.width} ${icon.height}`}
          color={color}
        >
          {icon.paths.map((path, index) => (
            <path key={index} d={path} />
          ))}
        </SVGImage>
      )}
      {props.component}
    </Icon.Element>
  )
}

Icon.Element = styled.i`
  display: inline-block;
  line-height: 1;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`
const SVGImage = styled.svg`
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  width: ${imageProps => imageProps.width}px;
  height: ${imageProps => imageProps.height}px;
  path {
    fill: ${imageProps => imageProps.color};
  }
`

const __ICONNAMES__ = Object.keys(icons)
const __COLORS__ = Object.keys(colors.base)

Icon.propTypes = {
  /** Icon name */
  name: PropTypes.oneOf(__ICONNAMES__).isRequired,
  /** Icon size */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Icon foreground color */
  color: PropTypes.oneOf(__COLORS__),
  component: PropTypes.node
}

Icon.defaultProps = {
  size: 20,
  color: 'default'
}

export default Icon
export { customIcon }
export { __ICONNAMES__ }
