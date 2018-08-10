import React from 'react'
import { Avatar, Tabs, Breadcrumb } from '@auth0/cosmos'

import Settings from './settings'
import Advanced from './advanced'
import Connections from './connections'
import ApplicationPageHeader from '../../components/application-page-header'
import ApplicationTypeImages from '../../components/application-types-images'

class ApplicationDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 1 }
  }

  handleSelected(selected) {
    this.setState({ selected })
  }

  render() {
    const applicationId = this.props.match.params.applicationId
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Link href="#/applications" icon="arrow-left-fill">
            Back to Applications
          </Breadcrumb.Link>
        </Breadcrumb>
        <ApplicationPageHeader
          title="API Explorer Application"
          type={{
            name: 'Non Interactive',
            applicationId: applicationId
          }}
          logo={
            <Avatar type="resource" size="xlarge" image={ApplicationTypeImages.non_interactive} />
          }
          breadcrumb={{
            content: 'Applications',
            link: '/#/applications'
          }}
        />
        <Tabs onSelect={nextIndex => this.handleSelected(nextIndex)} selected={this.state.selected}>
          <Tabs.Tab label="Quick Start">Quickstart</Tabs.Tab>
          <Tabs.Tab label="Settings" selected>
            <Settings applicationId={applicationId} />
          </Tabs.Tab>
          <Tabs.Tab label="Connections">
            <Connections />
          </Tabs.Tab>
          <Tabs.Tab label="Advanced">
            <Advanced applicationId={applicationId} />
          </Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default ApplicationDetail
