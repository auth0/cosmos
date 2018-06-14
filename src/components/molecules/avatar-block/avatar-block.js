import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Avatar, Link } from '@auth0/cosmos'
import { colors, fonts, spacing } from '@auth0/cosmos-tokens'
import { __ICONNAMES__ } from '../../atoms/icon'

const avatarSizes = {
  compact: 'small',
  default: 'medium',
  large: 'large'
}

const StyledAvatarBlock = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
`

const Text = styled.div`
  line-height: 1;
  margin-left: ${spacing.small};
`

const Title = styled.div`
  color: ${colors.text.default};
  line-height: 1;
  font-weight: ${fonts.weight.medium};
`

const Subtitle = styled.div`
  color: ${colors.text.secondary};
  line-height: 1;
  margin-top: ${spacing.xsmall};
  display: ${props => (props.size === 'compact' ? 'none' : 'block')};
`

const AvatarBlock = props => {
  let title
  let subtitle

  if (props.href) {
    title = (
      <Title>
        <Link href={props.href}>{props.title}</Link>
      </Title>
    )
  } else {
    title = <Title>{props.title}</Title>
  }

  if (props.subtitle) {
    subtitle = <Subtitle size={props.size}>{props.subtitle}</Subtitle>
  }

  return (
    <StyledAvatarBlock>
      <Avatar
        icon={props.icon}
        image={props.image}
        size={avatarSizes[props.size]}
        type={props.type}
      />
      <Text>
        {title}
        {subtitle}
      </Text>
    </StyledAvatarBlock>
  )
}

AvatarBlock.propTypes = {
  /** The type of item represented by the avatar block. */
  type: PropTypes.oneOf(['user', 'resource']).isRequired,
  /** An icon to display. */
  icon: PropTypes.oneOf(__ICONNAMES__),
  /** An image URL to display. */
  image: PropTypes.string.isRequired,
  /** The primary line of text to display. */
  title: PropTypes.string.isRequired,
  /** The secondary line of text to display. */
  subtitle: PropTypes.string,
  /** The size of the avatar block. */
  size: PropTypes.PropTypes.oneOf(['compact', 'default', 'large']),
  /** If specified, the main text will be rendered as a hyperlink with this as the target. */
  href: PropTypes.string
}

AvatarBlock.defaultProps = {
  size: 'default'
}

export default AvatarBlock
export { StyledAvatarBlock }
