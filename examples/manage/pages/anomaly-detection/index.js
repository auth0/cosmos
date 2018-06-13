import React from 'react'

import { PageHeader } from '@auth0/cosmos'

class AnomalyDetectionIndex extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Anomaly Detection"
          description={{
            text:
              'Provide extra layer of security to your customers by enabling shields​ that protect you and your users against different types of attacks and user access anomalies.'
          }}
        />
      </div>
    )
  }
}

export default AnomalyDetectionIndex
