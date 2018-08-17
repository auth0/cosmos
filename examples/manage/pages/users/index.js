import React from 'react'

import { PageHeader } from '@auth0/cosmos'

class UsersIndex extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Users"
          description={
            <span>
              An easy to use UI to help administrators manage user identities including password
              resets, creating and provisioning, blocking and deleting users.
            </span>
          }
          learnMore="/"
          primaryAction={{
            label: 'Create User',
            icon: 'plus',
            handler: () => {}
          }}
        />
      </div>
    )
  }
}

export default UsersIndex
