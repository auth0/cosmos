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
          description={
            <span>Get started with integrating Auth0 by the following guided tutorial below.</span>
          }
        />
        <div>
          <WelcomeCard imagePath="customer-icon.svg" paragraph="Single Page Web applications" />
          <WelcomeCard imagePath="customer-icon.svg" paragraph="Single Page Web applications" />
          <WelcomeCard imagePath="customer-icon.svg" paragraph="Single Page Web applications" />
          <WelcomeCard imagePath="customer-icon.svg" paragraph="Single Page Web applications" />
        </div>
      </div>
    )
  }
}

export default WelcomeIndex
