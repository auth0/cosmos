import React from 'react'
import { Tabs } from '../components'

import Settings from './settings'

class Client extends React.Component {
  render() {
    return (
      <Tabs>
        <Tabs.Tab label="Quick Start">Quickstart</Tabs.Tab>
        <Tabs.Tab label="Settings" selected>
          <Settings clientId={this.props.match.params.clientId} />
        </Tabs.Tab>
        <Tabs.Tab label="Connections">Connections</Tabs.Tab>
        <Tabs.Tab label="Advanced">Advanced</Tabs.Tab>
      </Tabs>
    )
  }
}

export default Client
