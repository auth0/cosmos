import React from 'react'

import Section from '../ov-components/section'
import Example from '../ov-components/example'
import { PageHeader } from 'auth0-cosmos'

import Avatar from '../../manage/client-avatar'
import ClientTypeImages from '../../manage/client-types-images'

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
        logo={<Avatar image={ClientTypeImages.non_interactive} />}
        breadcrumb={{
          content: 'Clients',
          link: '/clients'
        }}
      />
    </Example>
  </Section>
)

export default PageHeaders
