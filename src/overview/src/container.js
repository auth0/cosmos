import React from 'react'
import styled from 'styled-components'

import { Heading } from '../../components'
import { spacing } from '../../tokens'

const Container = styled.div`
  margin: ${spacing.xlarge} 0;
  h5 {
    margin-bottom: ${spacing.medium};
  }
`

export default props => (
  <Container>
    <Heading size={4}>{props.title}</Heading>
    {props.children}
  </Container>
)
