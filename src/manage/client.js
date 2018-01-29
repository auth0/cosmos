import React from 'react'
import { Tabs, Heading1 } from '../components'

import Settings from './settings'
import Connections from './connections'

class Client extends React.Component {
  render() {
    return (
      <div>
        <Heading1>API Explorer Client</Heading1>
        <Tabs>
          <Tabs.Tab label="Quick Start">Quickstart</Tabs.Tab>
          <Tabs.Tab label="Settings" selected>
            <Settings clientId={this.props.match.params.clientId} />
          </Tabs.Tab>
          <Tabs.Tab label="Connections">
            <Connections />
          </Tabs.Tab>
          <Tabs.Tab label="Advanced">Advanced</Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default Client
