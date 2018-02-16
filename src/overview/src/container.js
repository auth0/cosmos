import React from 'react'
import styled from 'styled-components'

import { Header } from '../../components'
import { spacing } from '../../tokens'

const Container = styled.div`
  margin: ${spacing.xlarge} 0;
  h5 {
    margin-bottom: ${spacing.medium};
  }
`

export default props => (
  <Container>
    <Header size={4}>{props.title}</Header>
    {props.children}
  </Container>
)
