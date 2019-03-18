import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import { Avatar, Link } from '@auth0/cosmos'
import { colors, fonts, spacing } from '@auth0/cosmos-tokens'
import { __ICONNAMES__ } from '../../atoms/icon'
import { deprecate } from '../../_helpers/custom-validations'
import containerStyles from '../../_helpers/container-styles'
import Automation from '../../_helpers/automation-attribute'

/* TODO: Find a good way to override: https://github.com/auth0/cosmos/issues/347 */
import { StyledLink } from '@auth0/cosmos/atoms/link'
import { rootProps } from '../../_helpers/root-props'

const avatarSizes = {
  compact: 'small',
  default: 'medium',
  large: 'large'
}

const textSpacing = '12px'

const Text = styled.div`
  margin-left: ${textSpacing};
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

const getLinkedElement = props => element => {
  let link = props.href || props.link

  if (!link) return element

  if (typeof link === 'string') {
    link = { href: link, target: '_blank' }
  }

  return <Link {...link}>{element}</Link>
}

const getTitle = props => <Title>{getLinkedElement(props)(props.title)}</Title>

const getAvatar = props =>
  getLinkedElement(props)(
    <Avatar
      icon={props.icon}
      image={props.image}
      size={avatarSizes[props.size]}
      type={props.type}
    />
  )

const AvatarBlock = props => {
  const title = getTitle(props)
  const avatar = getAvatar(props)
  let subtitle

  if (props.subtitle) {
    subtitle = <Subtitle size={props.size}>{props.subtitle}</Subtitle>
  }

  return (
    <AvatarBlock.Element {...Automation('avatar-block')} {...rootProps(props)}>
      {avatar}
      <Text>
        {title}
        {subtitle}
      </Text>
    </AvatarBlock.Element>
  )
}

AvatarBlock.Element = styled.span`
  ${containerStyles};

  display: flex;
  align-items: center;
  justify-content: start;
`

AvatarBlock.propTypes = {
  /** An icon to display. */
  icon: PropTypes.oneOf(__ICONNAMES__),
  /** An image URL to display. */
  image: PropTypes.string,
  /** The primary line of text to display. */
  title: PropTypes.string.isRequired,
  /** The type of item represented by the avatar block. */
  type: PropTypes.oneOf(['user', 'resource']).isRequired,
  /** The size of the avatar block. */
  size: PropTypes.PropTypes.oneOf(['compact', 'default', 'large']),
  /** The secondary line of text to display. */
  subtitle: PropTypes.string,
  /** @deprecated:link If specified, the main text will be rendered as a hyperlink */
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

const StyledAvatarBlock = AvatarBlock.Element

export default AvatarBlock
export { StyledAvatarBlock }
