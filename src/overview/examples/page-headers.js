import React from 'react'

import Section from '../ov-components/section'
import Example from '../ov-components/example'
import { Avatar, PageHeader } from '@auth0/cosmos'

import ClientTypeImages from '../../manage/components/client-types-images'
import ClientPageHeader from '../../manage/components/client-page-header'

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

    <Example title="Client Page Header">
      <ClientPageHeader
        title="API Explorer Client"
        type={{
          name: 'Non Interactive',
          clientId: 'DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip'
        }}
        logo={<Avatar size="large" image={ClientTypeImages.non_interactive} />}
        breadcrumb={{
          content: 'Clients',
          link: '/manage/clients'
        }}
      />
    </Example>
  </Section>
)

export default PageHeaders
