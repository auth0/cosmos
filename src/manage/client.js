import React from 'react'
import { Tabs } from '../components'

import Settings from './settings'

class Client extends React.Component {
  render() {
    return (
      <Tabs>
        <Tabs.Tab label="Quick Start">quick start</Tabs.Tab>
        <Tabs.Tab label="Settings" selected>
          <Settings clientId={this.props.match.params.clientId} />
        </Tabs.Tab>
        <Tabs.Tab label="Addons">addons</Tabs.Tab>
        <Tabs.Tab label="Connections">connections</Tabs.Tab>
        <Tabs.Tab label="Advanced">advanced</Tabs.Tab>
      </Tabs>
    )
  }
}

export default Client
