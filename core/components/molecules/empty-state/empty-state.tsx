import * as React from 'react'
import styled from '../../styled'
import { colors, spacing } from '../../tokens'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import Button from '../../atoms/button'
import Link from '../../atoms/link'
import Heading from '../../atoms/heading'
import { ActionWithIcon } from '../../_helpers/action-shape'
import FreeText from '../../_helpers/free-text'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

const getHelpLink = (link) => {
  if (!link) return undefined

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

export type LinkType = string | { href?: string; target?: string }

export interface IEmptyStateProps {
  /** HTML ID of the component */
  id?: string
  /** Big heading for section */
  title: string
  /** Icon associated with section */
  icon: string
  /** @deprecated:children Message */
  text?: string | React.ReactNode
  /** Message */
  children?: React.ReactNode
  /** @deprecated:link url and target for "Learn more" */
  helpUrl?: LinkType
  /** url and target for "Learn more" */
  link?: LinkType
  /** Primary call to action */
  action?: ActionWithIcon
}

const EmptyState = ({ link, helpUrl, title, icon, action, ...props }: IEmptyStateProps) => {
  let helpLink = getHelpLink(link || helpUrl)

  return (
    <EmptyState.Element {...Automation('empty-state')} {...props}>
      <Title size={1}>{title}</Title>
      <EmptyState.Body>
        <Icon name={icon} size={110} color="blue" />
        <FreeText {...props} useParagraph />
        {helpLink}
      </EmptyState.Body>
      {action && (
        <Button size="large" appearance="cta" icon={action.icon} onClick={action.handler}>
          {action.label}
        </Button>
      )}
    </EmptyState.Element>
  )
}

EmptyState.Element = styled.div`
  ${containerStyles};
  width: 100%;
  text-align: center;
`
EmptyState.Body = styled.div`
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

export default EmptyState
