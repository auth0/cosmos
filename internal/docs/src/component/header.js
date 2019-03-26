import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"

import { Heading2, Heading3 } from "../docs-components"

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
    <StyledHeader href="/" id={id}>
      <Link to={id}>
        <Heading>{props.children}</Heading>
      </Link>
    </StyledHeader>
  )
}

const SectionHeader = props => <Header section {...props} />
const ExampleHeader = props => <Header example {...props} />

export { SectionHeader, ExampleHeader }
