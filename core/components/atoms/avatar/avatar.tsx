import * as React from 'react'
import styled from '@auth0/cosmos/styled'
import { Image } from '@auth0/cosmos'
import { colors, misc } from '@auth0/cosmos-tokens'
import Icon, { __ICONNAMES__ } from '../icon'
import getUserAvatarUrl from '../../_helpers/avatar-url'
import Automation from '../../_helpers/automation-attribute'

const iconSizes = {
  xsmall: 14,
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 36,
  xxlarge: 52
}

const sources = {
  image: 'image',
  fallback: 'fallback',
  gravatar: 'gravatar',
  icon: 'icon'
}

const imageForAvatar = (source, handleError) => {
  if (React.isValidElement(source)) return source

  return (
    <Image
      width="100%"
      height="100%"
      fit="cover"
      src={source}
      onError={event => {
        event.target.src = null
        event.target.onError = undefined
        handleError(event)
      }}
    />
  )
}

const getImageForAvatar = (props, source, onError) => {
  const errorHandler = ({ discard }) => event => onError(discard, event)

  switch (source) {
    case sources.icon:
      return <Icon name={props.icon} size={iconSizes[props.size]} />
    case sources.gravatar:
      return imageForAvatar(
        getUserAvatarUrl(props.email, props.initials),
        errorHandler({ discard: sources.gravatar })
      )
    case sources.image:
      return imageForAvatar(props.image, errorHandler({ discard: sources.image }))
    default:
      return imageForAvatar(getUserAvatarUrl(null, null, props.type), onError)
  }
}

export interface IAvatarProps {
  /** An icon to display. */
  icon?: string
  /** An image URL or Image component. */
  image?: JSX.Element | string
  /** The size of the avatar. */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  /** The type of item represented by the avatar. */
  type?: 'user' | 'resource'
  /** Initials of the user (max 2 characters) */
  initials?: string
  /** E-mail of the user */
  email?: string
}

interface IAvatarState {
  imageErrored: boolean
  gravatarErrored: boolean
}

class Avatar extends React.Component<IAvatarProps, IAvatarState> {
  static defaultProps = {
    size: 'medium',
    type: 'user'
  }

  static Element = styled.span`
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

  constructor(props) {
    super(props)

    this.state = { imageErrored: false, gravatarErrored: false }
    this.discardSource = this.discardSource.bind(this)
  }

  discardSource(source: 'image' | 'gravatar') {
    switch (source) {
      case 'image':
        return this.setState({ imageErrored: true })
      case 'gravatar':
        return this.setState({ gravatarErrored: true })
      default:
        return
    }
  }

  getSource() {
    const { imageErrored, gravatarErrored } = this.state
    const { email, initials, icon, image } = this.props

    if (icon) return sources.icon
    if (imageErrored && gravatarErrored) return sources.fallback
    if (imageErrored || !image) {
      if (email || initials) return sources.gravatar
      return sources.fallback
    }

    return sources.image
  }

  render() {
    const source = this.getSource()
    const image = getImageForAvatar(this.props, this.getSource(), this.discardSource)

    return (
      <Avatar.Element
        type={this.props.type}
        size={this.props.size}
        {...Automation('avatar')}
        {...this.props}
      >
        {image}
      </Avatar.Element>
    )
  }
}

// Backwards compatibility (will be removed in 1.0)
const StyledAvatar = Avatar.Element

export default Avatar
export { StyledAvatar }
