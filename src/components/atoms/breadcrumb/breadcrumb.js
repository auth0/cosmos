import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { spacing } from '@auth0/cosmos-tokens'

import Icon from '../icon'

const StyledBreadcrumb = styled.a`
  color: rgba(0, 0, 0, 0.56);
  font-size: 13px;
  text-decoration: none;
  display: inline-block;
  margin-bottom: ${spacing.small};

  ${Icon.Element} {
    bottom: 1px;
    position: relative;
  }
`

const Breadcrumb = ({ link, content, ...props }) => {
  return (
    <StyledBreadcrumb href={link || ''} {...props}>
      <Icon name="arrow-left" size={15} color="rgba(0, 0, 0, 0.56)" /> {content}
    </StyledBreadcrumb>
  )
}

Breadcrumb.propTypes = {
  link: PropTypes.string,
  content: PropTypes.string.isRequired
}

export default Breadcrumb
