import React from 'react'
import { PageHeader } from '@auth0/cosmos'

import CreateApplicationDialog from './create-application-dialog'
import ApplicationList from '../../components/application-list'

class ApplicationIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dialogOpen: false }
  }

  setDialogOpen = dialogOpen => () => {
    this.setState({ dialogOpen })
  }

  render() {
    return (
      <div>
        <PageHeader
          title="Applications"
          description={{
            text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
            learnMore: '/manage/applications'
          }}
          primaryAction={{
            label: 'Create Application',
            icon: 'plus',
            handler: this.setDialogOpen(true)
          }}
          secondaryAction={{
            label: 'Tutorial',
            icon: 'play-circle',
            handler: () => {}
          }}
        />

        <ApplicationList />

        <CreateApplicationDialog open={this.state.dialogOpen} onClose={this.setDialogOpen(false)} />
      </div>
    )
  }
}

export default ApplicationIndex
