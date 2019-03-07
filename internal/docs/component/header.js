import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import kebabCase from 'lodash.kebabcase'

import { Heading2, Heading3 } from '../docs-components'

const StyledHeader = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }
`

const Header = props => {
  const id = kebabCase(props.children)
  const Heading = props.section ? Heading2 : Heading3

  return (
    <StyledHeader href="#" id={id}>
      <NavLink to={'#' + id}>
        <Heading>{props.children}</Heading>
      </NavLink>
    </StyledHeader>
  )
}

const SectionHeader = props => <Header section {...props} />
const ExampleHeader = props => <Header example {...props} />

export { SectionHeader, ExampleHeader }
