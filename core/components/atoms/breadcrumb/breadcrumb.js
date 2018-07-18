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
      cursor: pointer;
      color: ${colors.base.default};
      .breadcrumb-link-icon path {
        fill: ${colors.base.default};
      }
    }
  }

  ${/* last link should be inactive: */ ''};

  ${StyledLink}:last-child:hover {
    cursor: default;
    color: ${colors.base.grayDarkest};
  }

  ${/* sometimes there's just one link = first = last, let's override that */ ''};
  ${StyledLink}:first-child:hover {
    cursor: pointer;
    color: ${colors.base.default};
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
