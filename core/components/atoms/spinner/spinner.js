import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import Logo from '../logo'

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

const spinners = {
  small: {
    logo: null,
    width: 13
  },
  default: {
    logo: 'tiny',
    width: 40
  },
  large: {
    logo: 'small',
    width: 60
  }
}

const StyledSpinner = styled.span`
  display: inline-block;
  border-top: 2px solid ${props => getColor(props)};
  border-right: 2px solid ${props => getColor(props)};
  border-bottom: 2px solid ${props => getColor(props)};
  border-left: 2px solid ${props => getColor(props, true)};
  border-radius: 50%;
  vertical-align: text-bottom;
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  animation: ${rotate} 0.8s infinite linear;
`

const SpinnerContainer = styled.div`
  position: relative;
  width: ${p => p.variant.width}px;
  height: ${p => p.variant.width}px;

  ${Logo.Element} {
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const spinnerWithLogo = (variant, props) => {
  const iconColor = props.inverse ? 'light' : 'dark'

  return (
    <SpinnerContainer variant={variant}>
      <StyledSpinner {...props} width={variant.width} />
      <Logo size={variant.logo} color={iconColor} />
    </SpinnerContainer>
  )
}

const Spinner = props => {
  const variant = spinners[props.size]

  return variant.logo ? (
    spinnerWithLogo(variant, props)
  ) : (
    <StyledSpinner {...props} width={variant.width} />
  )
}

Spinner.propTypes = {
  /** Invert for dark background */
  inverse: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default', 'large'])
}

Spinner.defaultProps = {
  inverse: false,
  size: 'default'
}

export default Spinner
export { StyledSpinner }
