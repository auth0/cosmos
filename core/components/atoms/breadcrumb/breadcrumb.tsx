import * as React from 'react'
import styled from '../../styled'
import Automation from '../../_helpers/automation-attribute'

import { fonts, spacing, colors } from '@auth0/cosmos-tokens'
import containerStyles from '../../_helpers/container-styles'

import Icon from '../icon'
import Link, { LinkOnClickHandler } from '../link'

const Separator = styled(Icon)`
  margin: 0 ${spacing.small};
`

const LinkIcon = styled(Icon)`
  margin-right: ${spacing.xsmall};
`

export interface IBreadcrumbProps {
  /** HTML ID of the component */
  id?: string
  children?: JSX.Element | JSX.Element[]
}

const Breadcrumb = (props: IBreadcrumbProps) => (
  <Breadcrumb.Element {...Automation('breadcrumb')} {...props} />
)

Breadcrumb.Element = styled.div`
  ${containerStyles};

  /* overrides for link */
  ${Link.Element} {
    color: ${colors.base.grayDarkest};
    font-size: 13px;
    font-weight: ${fonts.weight.medium};
    &:hover {
      cursor: pointer;
      color: ${colors.link.default};
      ${LinkIcon} path {
        fill: ${colors.link.default};
      }
    }
  }

  /* last link should be inactive: */
  ${Link.Element}:last-child {
    color: ${colors.base.default};
    cursor: default;
  }

  /* sometimes there's just one link = first = last, let's override that */
  ${Link.Element}:first-child {
    color: ${colors.base.grayDarkest};
    cursor: pointer;
    &:hover {
      color: ${colors.link.default};
    }
  }

  /* fix alignment with text for all icons (including separator) */
  ${LinkIcon}, ${Separator} {
    position: relative;
    top: -2px;
  }

  ${Link.Element}:last-child ${Separator} {
    display: none;
  }
  ${LinkIcon} {
    top: -2px;
  }
  ${Separator} {
    top: -1px;
  }

  ${Link.Element}:last-child ${Separator} {
    display: none;
  }
`

export interface IBreadcrumbLinkProps {
  /** HTML ID of the component */
  id?: string
  href?: string
  icon?: string
  children?: string | JSX.Element
  onClick?: LinkOnClickHandler
}

Breadcrumb.Link = (props: IBreadcrumbLinkProps) => (
  <Link {...Automation('breadcrumb.link')} {...props}>
    {props.icon && <LinkIcon name={props.icon} size={12} color="grayDarkest" />}
    {props.children}
    <Separator name="chevron-right-fill" size={12} color="grayMedium" />
  </Link>
)

export default Breadcrumb
