import React from 'react'

import Container from './container'
import { EmptyState } from '../../components'

const EmptyStates = () => (
  <Container title="Empty State">
    <EmptyState
      icon="clients"
      text="No clients have been created."
      action={{
        icon: 'plus',
        text: 'Create Client',
        method: function() {
          /*...*/
        }
      }}
    />
  </Container>
)

export default EmptyStates
