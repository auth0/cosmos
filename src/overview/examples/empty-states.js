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
        text="No items have been added to this section."
        helpUrl="https://auth0.com"
        action={{
          icon: 'plus',
          text: 'Create Client',
          handler: function() {
            /*...*/
          }
        }}
      />
    </Example>
  </Section>
)

export default EmptyStates
