import React from 'react'
import { DangerZone } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <DangerZone
        id="custom-id"
        items={[
          {
            title: 'Delete this application',
            description: 'All your apps using this client will stop working.',
            action: {
              label: 'Delete',
              onClick: event => {}
            }
          }
        ]}
      />
    )
  }
}

export default Fixture
