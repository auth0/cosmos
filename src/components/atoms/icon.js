import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import PropTypes from 'prop-types'

injectGlobal`
  @font-face {
    font-family: budicon-font;
    src: url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.eot);
    src: url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.eot#iefix) format("embedded-opentype"),url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.woff) format("woff"),url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.ttf) format("truetype"),url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.svg#budicon-font) format("svg");
    font-weight: 400;
  }
`

const StyledIcon = styled.i`
  font-family: 'budicon-font';
  font-size: 13px;
  font-style: normal;
`

const SuccessIcon = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const ClientIcon = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Icon = props => {
  if (props.type === 'success') return <SuccessIcon />
  else if (props.type === 'clients') return <ClientIcon />
  else return null
}

Icon.propTypes = {
  /** Icon type */
  type: PropTypes.string.isRequired
}

export default Icon
