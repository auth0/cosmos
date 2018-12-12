import React from 'react'
import styled, { css, keyframes } from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Logo from '../logo'
import defaultPropChangeWarning from '../../_helpers/default-prop-change'

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
    width: 14
  },
  medium: {
    logo: 'tiny',
    width: 40
  },
  large: {
    logo: 'small',
    width: 60
  }
}

const spinnerWithLogo = (variant, props) => {
  const iconColor = props.inverse ? 'light' : 'dark'

  return (
    <Spinner.Container variant={variant}>
      <Spinner.Element {...props} width={variant.width} />
      <Logo size={variant.logo} color={iconColor} />
    </Spinner.Container>
  )
}

const Spinner = props => {
  defaultPropChangeWarning(Spinner, 'size', props.size, 'medium', '1.0.0')

  const variant = spinners[props.size]

  return variant.logo ? (
    spinnerWithLogo(variant, props)
  ) : (
    <Spinner.Element {...props} width={variant.width} />
  )
}

Spinner.Element = styled.span`
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

Spinner.Container = styled.div`
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

Spinner.propTypes = {
  /** Invert for dark background */
  inverse: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Spinner.defaultProps = {
  inverse: false,
  size: 'small'
}

const StyledSpinner = Spinner.Element

export default Spinner
export { StyledSpinner }
