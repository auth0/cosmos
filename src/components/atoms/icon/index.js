import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors } from '@auth0/cosmos-tokens'
import { icons } from './icons.json'

const Icon = props => {
  // If the icon name isn't found, show a question mark instead.
  const icon = icons[props.name] || icons.help
  return (
    <Icon.Element>
      <Image
        width={props.size}
        height={props.size}
        viewBox={`0 0 ${icon.width} ${icon.height}`}
        color={props.color}
      >
        {icon.paths.map((path, index) => <path key={index} d={path} />)}
      </Image>
    </Icon.Element>
  )
}

Icon.Element = styled.i`
  display: inline-block;
  line-height: 1;
`
const Image = styled.svg`
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  path {
    fill: ${props => props.color};
  }
`

Icon.propTypes = {
  /** Icon name */
  name: PropTypes.string.isRequired,
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
