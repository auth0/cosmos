import React from 'react'

import Section from '../ov-components/section'
import Example from '../ov-components/example'
import { EmptyState } from '@auth0/cosmos'

const EmptyStates = () => (
  <Section title="Empty State">
    <Example title="Empty State">
      <EmptyState
        icon="clients"
        title="Clients"
        text="No clients have been created."
        action={{
          icon: 'plus',
          text: 'Create Client',
          method: function() {
            /*...*/
          }
        }}
      />
    </Example>
  </Section>
)

export default EmptyStates
