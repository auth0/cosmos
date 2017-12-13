import React from 'react'
import styled from 'styled-components'

import { Heading3, Subheader } from '../components'

const Container = styled.div`
  height: 100vh;
`

export default props => (
  <Container>
    <Heading3>Docs</Heading3>
    <Subheader>Select a component from the sidebar</Subheader>
  </Container>
)
