import React from 'react'
import { EmptyState } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <EmptyState
        id="custom-id"
        title="Clients"
        icon="clients"
        link="auth0.com"
        action={{
          icon: 'plus',
          label: 'Create Client',
          handler: () => {}
        }}
      >
        No items have been added to this section.
      </EmptyState>
    )
  }
}

export default Fixture
