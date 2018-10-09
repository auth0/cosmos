import React from 'react'

import Section from '../components/section'
import Example from '../components/example'
import { EmptyState } from '@auth0/cosmos'

const EmptyStates = () => (
  <Section title="Empty State">
    <Example title="Empty State">
      <EmptyState
        icon="clients"
        title="Clients"
        link="https://auth0.com"
        action={{
          icon: 'plus',
          label: 'Create Client',
          handler: function() {
            /*...*/
          }
        }}
      >
        No items have been added to this section.
      </EmptyState>
    </Example>
  </Section>
)

export default EmptyStates
