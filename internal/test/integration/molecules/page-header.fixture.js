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
        primaryAction={<Button icon="plus">Create Client</Button>}
        secondaryAction={<Button icon="play-circle">Tutorial</Button>}
      />
    )
  }
}

export default Fixture
