import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Avatar, Link } from '@auth0/cosmos'
import { colors, fonts, spacing } from '@auth0/cosmos-tokens'
import { __ICONNAMES__ } from '../../atoms/icon'
import { deprecate } from '../../_helpers/custom-validations'

/* TODO: Find a good way to override: https://github.com/auth0/cosmos/issues/347 */
import { StyledLink } from '@auth0/cosmos/atoms/link'

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
  margin-left: ${spacing.small};
`

const Title = styled.span`
  line-height: normal;
  color: ${colors.text.default};
  font-weight: ${fonts.weight.medium};

  ${StyledLink} {
    line-height: normal;
  }
`

const Subtitle = styled.span`
  line-height: normal;
  color: ${colors.text.secondary};
  margin-top: ${spacing.xxsmall};
  display: ${props => (props.size === 'compact' ? 'none' : 'block')};
`

const getTitle = props => {
  let contents
  const link = props.href || props.link

  if (!link) {
    contents = props.title
  } else if (typeof link === 'string') {
    contents = <Link href={link}>{props.title}</Link>
  } else if (typeof link === 'object') {
    contents = (
      <Link href={link.href} target={link.target}>
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
  /** @deprecated If specified, the main text will be rendered as a hyperlink */
  href: PropTypes.string,
  /** If specified, the main text will be rendered as a hyperlink */
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      href: PropTypes.string,
      target: PropTypes.string
    })
  ]),

  _deprecation_href: props => deprecate(props, { name: 'href', replacement: 'link' })
}

AvatarBlock.defaultProps = {
  size: 'default'
}

export default AvatarBlock
export { StyledAvatarBlock }
