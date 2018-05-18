import React from 'react'

import { PageHeader } from '@auth0/cosmos'

class ApisIndex extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="APIs"
          description={{
            text: 'Define APIs that you can consume from your authorized applications.',
            learnMore: '/'
          }}
          primaryAction={{
            label: 'Create API',
            icon: 'plus',
            handler: null
          }}
        />
      </div>
    )
  }
}

export default ApisIndex
