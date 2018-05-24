import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Image, Link } from '@auth0/cosmos'
import { colors, fonts, misc, spacing } from '@auth0/cosmos-tokens'
import Icon, { __ICONNAMES__ } from '../icon'

const iconSizes = {
  xsmall: 14,
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 36,
  xxlarge: 52
}

const StyledAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
`

const AvatarImage = styled.span`
  width: ${props => misc.avatar[props.size]};
  height: ${props => misc.avatar[props.size]};
  background-color: ${colors.base.grayLightest};
  border: ${props => (props.shape === 'square' ? `1px solid ${colors.base.grayLight}` : 'none')};
  border-radius: ${props => (props.shape === 'square' ? '3px' : '50%')};

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    height: ${props => (props.shape === 'circle' ? '100%' : 'auto')};
    user-select: none;
  }

  ${Icon.Element} {
    line-height: 0;
  }
`

const AvatarText = styled.div`
  line-height: 1;
  margin-left: ${spacing.small};
`

const AvatarTitle = styled.div`
  color: ${colors.text.default};
  line-height: 1;
  font-weight: ${fonts.weight.medium};
`

const AvatarSubtitle = styled.div`
  color: ${colors.text.secondary};
  line-height: 1;
  margin-top: ${spacing.xsmall};
`

const Avatar = props => {
  let image
  let text

  if (props.icon) {
    image = <Icon name={props.icon} size={iconSizes[props.size]} />
  } else {
    image = <Image source={props.image} />
  }

  if (props.title || props.subtitle) {
    let title
    let subtitle

    if (props.title) {
      if (props.href) {
        title = (
          <AvatarTitle>
            <Link href={props.href}>{props.title}</Link>
          </AvatarTitle>
        )
      } else {
        title = <AvatarTitle>{props.title}</AvatarTitle>
      }
    }

    if (props.subtitle) {
      subtitle = <AvatarSubtitle>{props.subtitle}</AvatarSubtitle>
    }

    text = (
      <AvatarText>
        {title}
        {subtitle}
      </AvatarText>
    )
  }

  let shape
  if (props.shape === 'auto') {
    shape = props.icon ? 'square' : 'circle'
  } else {
    shape = props.shape
  }

  return (
    <StyledAvatar>
      <AvatarImage shape={shape} size={props.size}>
        {image}
      </AvatarImage>
      {text}
    </StyledAvatar>
  )
}

Avatar.propTypes = {
  /** If specified, the main text will be rendered as a hyperlink with this as the target. */
  href: PropTypes.string,
  /* An icon to display. */
  icon: PropTypes.oneOf(__ICONNAMES__),
  /** An image URL to display. */
  image: PropTypes.string.isRequired,
  /** The shape to render the image. */
  shape: PropTypes.oneOf(['auto', 'circle', 'square']),
  /** The size of the avatar. */
  size: PropTypes.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  /** The primary line of text to display. */
  title: PropTypes.string,
  /** The secondary line of text to display. */
  subtitle: PropTypes.string
}

Avatar.defaultProps = {
  size: 'medium',
  shape: 'auto'
}

export default Avatar
export { StyledAvatar }
