import React from 'react'
import { Tabs } from '../components'

import Settings from './settings'
import Connections from './connections'
import Advanced from './advanced'

class Client extends React.Component {
  render() {
    return (
      <Tabs>
        <Tabs.Tab label="Quick Start">Quick Start</Tabs.Tab>
        <Tabs.Tab label="Settings" selected>
          <Settings clientId={this.props.match.params.clientId} />
        </Tabs.Tab>
        <Tabs.Tab label="Connections">
          <Connections clientId={this.props.match.params.clientId} />
        </Tabs.Tab>
        <Tabs.Tab label="Advanced">
          <Advanced clientId={this.props.match.params.clientId} />
        </Tabs.Tab>
      </Tabs>
    )
  }
}

export default Client
