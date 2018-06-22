import React from 'react'
import { Tabs, Thumbnail } from '@auth0/cosmos'

import Settings from './settings'
import Advanced from './advanced'
import Connections from './connections'
import ApplicationPageHeader from '../../components/application-page-header'
import ApplicationTypeImages from '../../components/application-types-images'

class ApplicationDetail extends React.Component {
  render() {
    return (
      <div>
        <ApplicationPageHeader
          title="API Explorer Application"
          type={{
            name: 'Non Interactive',
            applicationId: this.props.match.params.applicationId
          }}
          logo={<Thumbnail size="large" source={ApplicationTypeImages.non_interactive} />}
          breadcrumb={{
            content: 'Applications',
            link: '/#/applications'
          }}
        />
        <Tabs>
          <Tabs.Tab label="Quick Start">Quickstart</Tabs.Tab>
          <Tabs.Tab label="Settings" selected>
            <Settings applicationId={this.props.match.params.applicationId} />
          </Tabs.Tab>
          <Tabs.Tab label="Connections">
            <Connections />
          </Tabs.Tab>
          <Tabs.Tab label="Advanced">
            <Advanced applicationId={this.props.match.params.applicationId} />
          </Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default ApplicationDetail
