import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Image } from '@auth0/cosmos'
import { colors, misc } from '@auth0/cosmos-tokens'
import Icon, { __ICONNAMES__ } from '../icon'

import EmptyUser from './assets/EmptyUser'

const iconSizes = {
  xsmall: 14,
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 36,
  xxlarge: 52
}

const StyledAvatar = styled.span`
  min-width: ${props => misc.avatar[props.size]};
  width: ${props => misc.avatar[props.size]};
  height: ${props => misc.avatar[props.size]};
  background-color: ${colors.base.grayLightest};
  border: ${props => (props.type === 'resource' ? `1px solid ${colors.base.grayLight}` : 'none')};
  border-radius: ${props => (props.type === 'resource' ? '3px' : '50%')};

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img,
  svg {
    height: 100%;
    width: 100%;
    user-select: none;
  }

  ${Icon.Element} {
    line-height: 0;
  }
`

const Avatar = props => {
  let image

  if (props.icon) {
    image = <Icon name={props.icon} size={iconSizes[props.size]} />
  } else if (typeof props.image === 'string') {
    image = <Image source={props.image} />
  } else if (!props.image && props.type === 'user') {
    image = <EmptyUser width={misc.avatar[props.size]} />
  } else {
    image = props.image
  }

  return (
    <StyledAvatar type={props.type} size={props.size}>
      {image}
    </StyledAvatar>
  )
}

Avatar.propTypes = {
  /** An icon to display. */
  icon: PropTypes.oneOf(__ICONNAMES__),
  /** An image URL or component to display. */
  image: PropTypes.node,
  /** The size of the avatar. */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  /** The type of item represented by the avatar. */
  type: PropTypes.oneOf(['user', 'resource']).isRequired
}

Avatar.defaultProps = {
  size: 'medium',
  type: 'user'
}

export default Avatar
export { StyledAvatar }
