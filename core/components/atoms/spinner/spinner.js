import React from 'react'
import styled, { keyframes } from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'

const rotate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(1turn) }
`

const getColor = (props, highlight) => {
  let color = '0, 0, 0'
  let opacity = highlight ? 0.4 : 0.08

  if (props.inverse) {
    color = '255, 255, 255'
    opacity = highlight ? 0.85 : 0.2
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
  inverse: PropTypes.bool
}

Spinner.defaultProps = {
  inverse: false
}

export default Spinner
export { StyledSpinner }
