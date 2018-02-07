import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledBreadcrumb = styled.a`
  color: rgba(0, 0, 0, 0.56);
  font-size: 13px;
  text-decoration: none;
`

const Breadcrumb = ({ link, content, ...props }) => {
  return (
    <StyledBreadcrumb href={link || ''} {...props}>
      {content}
    </StyledBreadcrumb>
  )
}

export default Breadcrumb
