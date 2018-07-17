import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { spacing, colors } from '@auth0/cosmos-tokens'

import Icon from '../icon'
import Link, { StyledLink } from '../link'

const Wrapper = styled.div`
  ${/* overrides for link */ ''};

  ${StyledLink} {
    font-size: 13px;
    margin-bottom: ${spacing.small};
  }

  ${/* code for separator: */ ''};

  ${StyledLink} {
    padding: 0 ${spacing.xsmall};
    &:after {
      content: '/';
      padding-left: ${spacing.xsmall};
      color: ${colors.base.grayDark};
    }
  }

  ${StyledLink}:last-child {
    &:after {
      content: '';
    }
  }
`

const Breadcrumb = ({ link, content, ...props }) => {
  return (
    <Wrapper>
      <Icon name="arrow-left" size={15} color="grayDark" />
      {props.children}
    </Wrapper>
  )
}

Breadcrumb.propTypes = {
  children: PropTypes.node
}

Breadcrumb.Link = props => <Link {...props} />

Breadcrumb.Link.propTypes = {
  link: PropTypes.string
}

export default Breadcrumb
