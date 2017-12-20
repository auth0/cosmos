import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import PropTypes from 'prop-types'

injectGlobal`
  @font-face {
    font-family: budicon-font;
    src: url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.eot);
    src: url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.eot#iefix) format("embedded-opentype"),url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.woff) format("woff"),url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.ttf) format("truetype"),url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.svg#budicon-font) format("svg");
  }
`

const StyledIcon = styled.i`
  font-family: 'budicon-font';
  display: inline-block;
  font-size: ${props => props.size}px;
  font-weight: 400;
  font-style: normal;
`

const Success = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Clients = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const HourGlass = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Icon = props => {
  if (props.type === 'success') return <Success {...props} />
  else if (props.type === 'clients') return <Clients {...props} />
  else if (props.type === 'hourglass') return <HourGlass {...props} />
  else return null
}

Icon.propTypes = {
  /** Icon type */
  type: PropTypes.string.isRequired,
  /** Icon size */
  size: PropTypes.number
}

Icon.defaultProps = {
  size: 14
}

export default Icon
export { StyledIcon }
