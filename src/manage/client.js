import React from 'react'
import { Tabs, Heading1 } from '../components'

import Settings from './settings'
import Advanced from './advanced'
import Connections from './connections'

class Client extends React.Component {
  render() {
    return (
      <div>
        <Heading1>API Explorer Client</Heading1>
        <Tabs>
          <Tabs.Tab label="Quick Start">Quickstart</Tabs.Tab>
          <Tabs.Tab label="Settings">
            <Settings clientId={this.props.match.params.clientId} />
          </Tabs.Tab>
          <Tabs.Tab label="Connections">
            <Connections />
          </Tabs.Tab>
          <Tabs.Tab label="Advanced" selected>
            <Advanced clientId={this.props.match.params.clientId} />
          </Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default Client
