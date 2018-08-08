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

const getTitle = props => {
  let contents

  if (!props.href) {
    contents = props.title
  } else if (typeof props.href === 'string') {
    contents = <Link href={props.href}>{props.title}</Link>
  } else if (typeof props.href === 'object') {
    contents = (
      <Link href={props.href.href} target={props.href.target}>
        {props.title}
      </Link>
    )
  }
  return <Title>{contents}</Title>
}

const AvatarBlock = props => {
  let title = getTitle(props)
  let subtitle

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
  /** An icon to display. */
  icon: PropTypes.oneOf(__ICONNAMES__),
  /** An image URL to display. */
  image: PropTypes.string.isRequired,
  /** The primary line of text to display. */
  title: PropTypes.string.isRequired,
  /** The type of item represented by the avatar block. */
  type: PropTypes.oneOf(['user', 'resource']).isRequired,
  /** The size of the avatar block. */
  size: PropTypes.PropTypes.oneOf(['compact', 'default', 'large']),
  /** The secondary line of text to display. */
  subtitle: PropTypes.string,
  /** If specified, the main text will be rendered as a hyperlink with this as the target. */
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      href: PropTypes.string,
      target: PropTypes.string
    })
  ])
}

AvatarBlock.defaultProps = {
  size: 'default'
}

export default AvatarBlock
export { StyledAvatarBlock }
