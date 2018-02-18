import React from 'react'

import Section from '../ov-components/section'
import Example from '../ov-components/example'
import { EmptyState } from '../../components'

const EmptyStates = () => (
  <Section title="Empty State">
    <Example title="Empty State">
      <EmptyState
        icon="clients"
        text="No clients have been created."
        action={{
          icon: 'add',
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
