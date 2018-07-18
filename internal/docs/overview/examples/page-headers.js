import React from 'react'

import Section from '../components/section'
import Example from '../components/example'
import { PageHeader } from '@auth0/cosmos'

const PageHeaders = () => (
  <Section>
    <Example title="Page Header">
      <PageHeader
        title="Clients"
        description={{
          text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
          learnMore: '/clients'
        }}
        primaryAction={{
          label: 'Create Client',
          icon: 'plus',
          handler: () => {}
        }}
        secondaryAction={{
          label: 'Tutorial',
          icon: 'play-circle',
          handler: () => {}
        }}
      />
    </Example>
  </Section>
)

export default PageHeaders
