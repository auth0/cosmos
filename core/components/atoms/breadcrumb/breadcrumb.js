import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { spacing, colors } from '@auth0/cosmos-tokens'

import Icon from '../icon'
import Link, { StyledLink } from '../link'

const Wrapper = styled.div`
  ${/* overrides for link */ ''};

  ${StyledLink} {
    color: ${colors.base.grayDarkest};
    font-size: 13px;
    margin-bottom: ${spacing.small};
    &:hover {
      color: ${colors.base.default};
      .breadcrumb-link-icon path {
        fill: ${colors.base.default};
      }
    }
  }

  ${/* code for separator: */ ''};

  ${Icon.Element} {
    margin: 0 ${spacing.small};
  }

  ${StyledLink}:last-child .cosmos-breadcrumb-separator {
    display: none;
  }
`

const Breadcrumb = props => <Wrapper {...props} />

Breadcrumb.Link = props => (
  <Link>
    {props.icon && (
      <Icon className="breadcrumb-link-icon" name={props.icon} size={15} color="grayDarkest" />
    )}
    {props.children}
    <Icon
      name="chevron-down"
      className="cosmos-breadcrumb-separator"
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
