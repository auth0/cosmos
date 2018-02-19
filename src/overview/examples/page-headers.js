import React from 'react'

import Section from '../ov-components/section'
import Example from '../ov-components/example'
import { PageHeader } from '../../components'

import Avatar from '../../manage/client-avatar'

const PageHeaders = () => (
  <Section>
    <Example title="Page Header">
      <PageHeader
        title="Clients"
        description={{
          text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
          learnMore: '/clients'
        }}
        actions={{
          primaryAction: {
            label: 'Create Client',
            icon: 'plus',
            method: this.save
          },
          secondaryAction: {
            label: 'Tutorial',
            icon: 'play-circle',
            method: this.save
          }
        }}
      />
    </Example>

    <Example title="Client Page Header">
      <PageHeader
        title="API Explorer Client"
        type={{
          name: 'Non Interactive',
          clientId: 'DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip'
        }}
        logo={<Avatar />}
        breadcrumb={{
          content: 'Clients',
          link: '/clients'
        }}
      />
    </Example>
  </Section>
)

export default PageHeaders
