import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { spacing } from '../../../tokens'

import Icon from '../icon'

const StyledBreadcrumb = styled.a`
  color: rgba(0, 0, 0, 0.56);
  font-size: 13px;
  text-decoration: none;
  display: inline-block;
  margin-bottom: ${spacing.small};
`

const Breadcrumb = ({ link, content, ...props }) => {
  return (
    <StyledBreadcrumb href={link || ''} {...props}>
      <Icon name="arrow-left" /> {content}
    </StyledBreadcrumb>
  )
}

export default Breadcrumb
