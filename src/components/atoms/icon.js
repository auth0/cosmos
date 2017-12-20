import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import PropTypes from 'prop-types'

import data from './icons.json'

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

const Extensions = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Trash = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Notifications = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Multifactor = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Reveal = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Dashboard = styled(StyledIcon)`
  &:after {
    content: '';
  }
`
const ArrowRight = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Users = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Connections = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Analytics = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Emails = styled(StyledIcon)`
  &:after {
    content: '';
  }
`

const Icon = props => {
  if (props.type === 'success') return <Success {...props} />
  else if (props.type === 'clients') return <Clients {...props} />
  else if (props.type === 'hourglass') return <HourGlass {...props} />
  else if (props.type === 'extensions') return <Extensions {...props} />
  else if (props.type === 'trash') return <Trash {...props} />
  else if (props.type === 'notifications') return <Notifications {...props} />
  else if (props.type === 'multifactor') return <Multifactor {...props} />
  else if (props.type === 'reveal') return <Reveal {...props} />
  else if (props.type === 'dashboard') return <Dashboard {...props} />
  else if (props.type === 'arrow-right') return <ArrowRight {...props} />
  else if (props.type === 'users') return <Users {...props} />
  else if (props.type === 'connections') return <Connections {...props} />
  else if (props.type === 'analytics') return <Analytics {...props} />
  else if (props.type === 'emails') return <Emails {...props} />

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
