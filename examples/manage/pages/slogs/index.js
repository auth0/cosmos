import React from 'react'

import { PageHeader } from '@auth0/cosmos'

class LogsIndex extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Logs"
          description={{
            text:
              'Storage of log data of both actions taken in the dashboard by the administrators, as well as authentications made by your users.',
            learnMore: '/'
          }}
        />
      </div>
    )
  }
}

export default LogsIndex
