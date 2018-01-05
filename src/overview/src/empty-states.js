import React from 'react'

import Container from './container'
import { EmptyState, Text } from '../../components'

const EmptyStates = () => (
  <Container title="Empty State">
    <EmptyState icon="clients">
      <Text>No items have been added to this section.</Text>
    </EmptyState>
  </Container>
)

export default EmptyStates
