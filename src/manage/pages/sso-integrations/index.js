import React from 'react'

import { EmptyState } from '@auth0/cosmos'

class SsoIndex extends React.Component {
  render() {
    return (
      <div>
        <EmptyState
          title="SSO Integrations"
          icon="sso-integrations"
          helpUrl="http://auth0.com"
          action={{
            icon: 'plus',
            label: 'Create SSO Integration',
            handler: () => {}
          }}
        />
      </div>
    )
  }
}

export default SsoIndex
