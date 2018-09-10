import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import { colors, spacing } from '@auth0/cosmos-tokens'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import Button from '../../atoms/button'
import Link from '../../atoms/link'
import Heading from '../../atoms/heading'
import { actionShapeWithRequiredIcon } from '../../_helpers/action-shape'
import { Text } from '../../_helpers/free-text'
import { deprecate } from '../../_helpers/custom-validations'
import Automation from '../../_helpers/automation-attribute'

const getHelpLink = link => {
  if (!link) return

  /* link supports both formats: string and object */
  if (typeof link === 'string') {
    link = { href: link, target: '_blank' } // defaults
  }

  return (
    <LearnMore>
      <Link {...link}>
        Learn More <i> </i>
      </Link>
    </LearnMore>
  )
}

const EmptyState = props => {
  let helpLink = getHelpLink(props.link || props.helpUrl)

  return (
    <Wrapper {...Automation('empty-state')}>
      <Title size={1}>{props.title}</Title>
      <Body>
        <Icon name={props.icon} size={110} color="blue" />
        <Text {...props} useParagraph />
        {helpLink}
      </Body>
      <Button size="large" appearance="cta" icon={props.action.icon} onClick={props.action.handler}>
        {props.action.label}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`
const Body = styled.div`
  max-width: 400px;
  margin: 0 auto ${spacing.small} auto;

  > ${Icon.Element} {
    margin-bottom: ${spacing.xsmall};
    line-height: 1em;
    opacity: 0.2;
  }
`
const Title = styled(Heading)`
  margin: 0 0 ${spacing.xlarge} 0;
`

const LearnMore = styled.div`
  display: inline-block;
  i {
    position: relative;
    left: 2px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 0 4px 6px;
    border-color: transparent transparent transparent ${colors.link.default};
  }
  &:hover i  {
    border-color: transparent transparent transparent ${colors.link.defaultHover};
  }
`

EmptyState.displayName = 'EmptyState'

EmptyState.propTypes = {
  /** Big heading for section */
  title: PropTypes.string.isRequired,
  /** Icon associated with section */
  icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
  /** @deprecated Message */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Message */
  children: PropTypes.node.isRequired,
  /** @deprecated url and target for "Learn more" */
  helpUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      href: PropTypes.string,
      target: PropTypes.string
    })
  ]),
  /** url and target for "Learn more" */
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      href: PropTypes.string,
      target: PropTypes.string
    })
  ]),
  /** Primary call to action */
  action: actionShapeWithRequiredIcon.isRequired,

  _deprecation_text: props => deprecate(props, { name: 'text', replacement: 'children' }),
  _deprecation_helpUrl: props => deprecate(props, { name: 'helpUrl', replacement: 'link' })
}

export default EmptyState
