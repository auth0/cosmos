import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, misc } from '../../../tokens/'

const StyledBreadcrumb = styled.a`
  color: rgba(0, 0, 0, 0.56);
  font-size: 13px;
  text-decoration: none;
`

const Breadcrumb = ({ href, content, ...props }) => {
  return (
    <StyledBreadcrumb href={href || ''} {...props}>
      {content}
    </StyledBreadcrumb>
  )
}

export default Breadcrumb
