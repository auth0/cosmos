import React from 'react'
import { PageHeader } from '@auth0/cosmos'
import WelcomeCard from '../../components/welcome-card'

class WelcomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dialogOpen: false }
  }

  render() {
    return (
      <div>
        <PageHeader
          title="Getting Started"
          description={{
            text: 'Get started with integrating Auth0 by the following guided tutorial below'
          }}
        />
        <div>
          <WelcomeCard
            imagePath="../customers-icon-e6580a660a.svg"
            paragraph="Single Page Web applications"
          />
          <WelcomeCard
            imagePath="../customers-icon-e6580a660a.svg"
            paragraph="Single Page Web applications"
          />
          <WelcomeCard
            imagePath="../customers-icon-e6580a660a.svg"
            paragraph="Single Page Web applications"
          />
          <WelcomeCard
            imagePath="../customers-icon-e6580a660a.svg"
            paragraph="Single Page Web applications"
          />
        </div>
      </div>
    )
  }
}

export default WelcomeIndex
