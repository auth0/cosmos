import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { deprecate } from '../../_helpers/custom-validations'

const rotate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(1turn) }
`

const getColor = (props, highlight) => {
  let color = '0, 0, 0'
  let opacity = highlight ? 0.4 : 0.08
  let type = props.type

  if (props.inverse) type = 'inverse'

  if (type === 'inverse') {
    color = '255, 255, 255'
    opacity = highlight ? 0.85 : 0.2
  }

  if (type === 'gray') {
    color = '150, 150, 150'
    opacity = highlight ? 0.65 : 0.1
  }

  return `rgba(${color}, ${opacity})`
}

const StyledSpinner = styled.span`
  display: inline-block;
  border-top: 2px solid ${props => getColor(props)};
  border-right: 2px solid ${props => getColor(props)};
  border-bottom: 2px solid ${props => getColor(props)};
  border-left: 2px solid ${props => getColor(props, true)};
  border-radius: 50%;
  width: 1em;
  height: 1em;
  vertical-align: text-bottom;
  animation: ${rotate} 0.8s infinite linear;
`

const Spinner = props => <StyledSpinner {...props} />

Spinner.propTypes = {
  /** Invert for dark background */
  type: PropTypes.oneOf(['normal', 'inverse', 'gray']),
  /** @deprecated Shows a white spinner instead of the default. */
  inverse: PropTypes.bool,

  /** deprecate boolean inverse prop */
  _error: props => deprecate(props, { name: 'inverse', replacement: 'type' })
}

Spinner.defaultProps = {
  type: 'normal',
  inverse: false
}

export default Spinner
export { StyledSpinner }
