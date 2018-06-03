import React from 'react'

import { PageHeader } from '@auth0/cosmos'

class RulesIndex extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Rules"
          description={{
            text:
              'Custom Javascript snippets that run in a secure, isolated sandbox in the Auth0 service as part of your authentication pipeline.',
            learnMore: '/'
          }}
          primaryAction={{
            label: 'Create Rule',
            icon: 'plus',
            handler: null
          }}
          secondaryAction={{
            label: 'Tutorial',
            icon: 'play-circle',
            handler: () => {}
          }}
        />
      </div>
    )
  }
}

export default RulesIndex
