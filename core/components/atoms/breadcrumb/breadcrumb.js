import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { spacing, colors } from '@auth0/cosmos-tokens'

import Icon from '../icon'
import Link, { StyledLink } from '../link'

const Wrapper = styled.div`
  ${/* overrides for link */ ''};

  ${StyledLink} {
    color: ${colors.base.default};
    font-size: 13px;
    margin-bottom: ${spacing.small};
    &:hover {
      color: ${colors.base.grayDarkest};
      .breadcrumb-link-icon path {
        fill: ${colors.base.grayDarkest};
      }
    }
  }

  ${/* code for separator: */ ''};

  ${Icon.Element} {
    margin: 0 ${spacing.small};
  }

  ${StyledLink}:last-child ${Icon.Element} {
    display: none;
  }
`

const Breadcrumb = props => <Wrapper {...props} />

Breadcrumb.Link = props => (
  <Link>
    {props.icon && (
      <Icon className="breadcrumb-link-icon" name={props.icon} size={15} color="default" />
    )}
    {props.children}
    <Icon
      name="chevron-down"
      style={{ transform: 'rotate(-90deg)' }}
      size={15}
      color="grayMedium"
    />
  </Link>
)

Breadcrumb.propTypes = {
  children: PropTypes.node
}

Breadcrumb.Link.propTypes = {
  link: PropTypes.string
}

export default Breadcrumb
