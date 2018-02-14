import React from 'react'
import { Tabs, Header } from '../components'

import Settings from './settings'
import Advanced from './advanced'
import Connections from './connections'

class Client extends React.Component {
  render() {
    return (
      <div>
        <Header size={1}>API Explorer Client</Header>
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

export default Client
