import React from 'react'
import styled from 'styled-components'
import startCase from 'lodash.startcase'

import { Alert } from '@auth0/cosmos'
import { Heading1, Subheader } from '../docs-components'

const Headings = styled.div`
  margin-bottom: 3rem;
  white-space: normal;
`

const Header = props => {
  let warning
  if (props.unstable === true) {
    warning = (
      <Alert type="warning" title="Be careful!" dismissible={false}>
        This component is currently unstable, and may change or be removed entirely in future
        versions.
      </Alert>
    )
  }

  return (
    <Headings>
      {warning}
      <Heading1>{startCase(props.displayName)}</Heading1>
      <Subheader>{props.description}</Subheader>
    </Headings>
  )
}

export default Header
