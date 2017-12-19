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
  font-size: 13px;
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

const Copy = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Icon = props => {
  if (props.type === 'success') return <Success />
  else if (props.type === 'clients') return <Clients />
  else if (props.type === 'hourglass') return <HourGlass />
  else if (props.type === 'copy') return <Copy />
  else return null
}

Icon.propTypes = {
  /** Icon type */
  type: PropTypes.string.isRequired
}

export default Icon
