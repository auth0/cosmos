import React from 'react'
import styled from 'styled-components'

import { Subheader } from '../../components'
import { spacing } from '../../tokens'

const Container = styled.div`
  margin: ${spacing.xlarge} 0;
  ${Subheader} {
    margin-bottom: ${spacing.medium};
  }
`

export default props => (
  <Container>
    <Subheader>{props.title}</Subheader>
    {props.children}
  </Container>
)
