import React from 'react'

import { PageHeader } from '@auth0/cosmos'

class EmailsIndex extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Email Templates"
          description={{
            text:
              'Standard welcome, password reset, and account verification email-based workflows, built right into Auth0.',
            learnMore: '/manage/clients'
          }}
        />
      </div>
    )
  }
}

export default EmailsIndex
