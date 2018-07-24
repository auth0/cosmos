import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { fonts, spacing, colors } from '@auth0/cosmos-tokens'

import Icon, { StyledIcon } from '../icon'
import Link, { StyledLink } from '../link'

const Separator = styled(Icon)`
  margin: 0 ${spacing.xsmall};
`

const LinkIcon = styled(Icon)`
  margin-right: ${spacing.xsmall};
`

const Wrapper = styled.div`
  ${/* overrides for link */ ''};

  ${StyledLink} {
    color: ${colors.base.grayDarkest};
    font-size: 13px;
    font-weight: ${fonts.weight.medium};
    &:hover {
      cursor: pointer;
      color: ${colors.base.default};

      ${LinkIcon} path {
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

  ${/* fix alignment with text for all icons (including separator) */ ''};
  ${LinkIcon}, ${Separator} {
    position: relative;
    top: -2px;
  }

  ${StyledLink}:last-child ${Separator} {
    display: none;
  }
`

const Breadcrumb = props => <Wrapper {...props} />

Breadcrumb.Link = props => (
  <Link>
    {props.icon && (
      <LinkIcon className="cs-breadcrumb-icon" name={props.icon} size={12} color="grayDarkest" />
    )}
    {props.children}
    <Separator
      name="chevron-right-fill"
      className="cs-breadcrumb-separator"
      size={12}
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
