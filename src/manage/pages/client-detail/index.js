import React from 'react'
import { Avatar, Tabs } from '@auth0/cosmos'

import Settings from './settings'
import Advanced from './advanced'
import Connections from './connections'
import ClientPageHeader from '../../components/client-page-header'
import ClientTypeImages from '../../components/client-types-images'

class ClientDetail extends React.Component {
  render() {
    return (
      <div>
        <ClientPageHeader
          title="API Explorer Client"
          type={{
            name: 'Non Interactive',
            clientId: this.props.match.params.clientId
          }}
          logo={<Avatar size="large" image={ClientTypeImages.non_interactive} />}
          breadcrumb={{
            content: 'Clients',
            link: '/manage/clients'
          }}
        />
        <Tabs>
          <Tabs.Tab label="Quick Start">Quickstart</Tabs.Tab>
          <Tabs.Tab label="Settings" selected>
            <Settings clientId={this.props.match.params.clientId} />
          </Tabs.Tab>
          <Tabs.Tab label="Connections">
            <Connections />
          </Tabs.Tab>
          <Tabs.Tab label="Advanced">
            <Advanced clientId={this.props.match.params.clientId} />
          </Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default ClientDetail
