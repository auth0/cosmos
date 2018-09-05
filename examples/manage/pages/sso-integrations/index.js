import React from 'react'

import { EmptyState } from '@auth0/cosmos'

class SsoIndex extends React.Component {
  render() {
    return (
      <div>
        <EmptyState
          title="SSO Integrations"
          icon="sso-integrations"
          link="http://auth0.com"
          action={{
            label: 'Create SSO Integration',
            icon: 'plus',
            handler: () => {}
          }}
        >
          There are no SSO integrations
        </EmptyState>
      </div>
    )
  }
}

export default SsoIndex
