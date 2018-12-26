import React from 'react'
import { PageHeader, PageLayout, Paragraph, RowLayout, DangerZone } from '@auth0/cosmos'

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
      <PageLayout>
        <PageLayout.Header>
          <PageHeader
            title="Applications"
            description="Setup a mobile, web or IoT application to use Auth0 for Authentication."
            learnMore="/manage/applications"
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
        </PageLayout.Header>
        <PageLayout.Content>
          <RowLayout gutter="spacious">
            <Paragraph>
              This is aparagraph loremThis is aparagraph loremThis is aparagraph loremThis is
              aparagraph loremThis is aparagraph loremThis is aparagraph loremThis is aparagraph
              loremThis is aparagraph lorem
            </Paragraph>
            <ApplicationList />
            <DangerZone
              items={[
                {
                  title: 'Delete this application',
                  description: 'All your projects using this application will stop working.',
                  action: {
                    label: 'Delete Application',
                    onClick: () => {}
                  }
                }
              ]}
            />
          </RowLayout>
        </PageLayout.Content>

        <CreateApplicationDialog open={this.state.dialogOpen} onClose={this.setDialogOpen(false)} />
      </PageLayout>
    )
  }
}

export default ApplicationIndex
