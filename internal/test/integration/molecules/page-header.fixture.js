import React from 'react'
import { PageHeader } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <PageHeader
        id="custom-id"
        title="Clients"
        description={<span>long description goes here</span>}
        learnMore="/link"
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
    )
  }
}

export default Fixture
