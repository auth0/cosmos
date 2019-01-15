import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import { Image } from '@auth0/cosmos'
import { colors, misc } from '@auth0/cosmos-tokens'
import Icon, { __ICONNAMES__ } from '../icon'
import getUserAvatarUrl from '../../_helpers/avatar-url'
import Automation from '../../_helpers/automation-attribute'

const PLACEHOLDERS = {
  USER: 'https://cdn.auth0.com/website/cosmos/avatar-user-default.svg',
  RESOURCE: 'https://cdn.auth0.com/website/cosmos/avatar-resource-default.svg'
}

const iconSizes = {
  xsmall: 14,
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 36,
  xxlarge: 52
}

const getImageForAvatar = props => {
  if (props.icon) return <Icon name={props.icon} size={iconSizes[props.size]} />
  if (props.email && props.initials)
    return (
      <Image
        width="100%"
        height="100%"
        fit="cover"
        source={getUserAvatarUrl(props.image, props.email, props.initials)}
      />
    )
  if (typeof props.image === 'string') {
    return <Image width="100%" height="100%" fit="cover" source={props.image} />
  }

  if (!props.image)
    return (
      <Image
        width="100%"
        height="100%"
        fit="cover"
        source={props.type === 'user' ? PLACEHOLDERS.USER : PLACEHOLDERS.RESOURCE}
      />
    )

  return props.image
}

const Avatar = props => {
  const image = getImageForAvatar(props)

  return (
    <Avatar.Element type={props.type} size={props.size} {...Automation('avatar')} {...props}>
      {image}
    </Avatar.Element>
  )
}

Avatar.Element = styled.span`
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

  /* This allows to pass an SVG tag to the image prop and it will render correctly. This is not needed. We can remove this if we change the "image" prop to only accept a string */
  img,
  svg {
    height: 100%;
    width: 100%;
  }

  ${Icon.Element} {
    line-height: 0;
    /* Try to remove line-height and set display: inline-flex; */
  }
`

// Backwards compatibility (will be removed in 1.0)
const StyledAvatar = Avatar.Element

Avatar.propTypes = {
  /** An icon to display. */
  icon: PropTypes.oneOf(__ICONNAMES__),
  /** An image URL or Image component. */
  image: PropTypes.node,
  /** The size of the avatar. */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  /** The type of item represented by the avatar. */
  type: PropTypes.oneOf(['user', 'resource']).isRequired,
  /** Initials of the user */
  initials: PropTypes.string,
  /** E-mail of the user */
  email: PropTypes.string
}

Avatar.defaultProps = {
  size: 'medium',
  type: 'user'
}

export default Avatar
export { StyledAvatar }
