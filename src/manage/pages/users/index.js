import React from 'react'

import { PageHeader } from '@auth0/cosmos'

class UsersIndex extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Users"
          description={{
            text:
              'An easy to use UI to help administrators manage user identities including password resets, creating and provisioning, blocking and deleting users.',
            learnMore: '/'
          }}
          primaryAction={{
            label: 'Create User',
            icon: 'plus',
            handler: null
          }}
        />
      </div>
    )
  }
}

export default UsersIndex
