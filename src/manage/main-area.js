import React from 'react'

import { Dummy as PageHeader } from './dummy-components'
import { Dummy as Tabs } from './dummy-components'

import Settings from './settings'

const MainArea = () => (
  <div>
    <PageHeader title="API Explorer Client" />
    <Tabs>
      <Tabs.Tab label="Quick Start" />
      <Tabs.Tab label="Settings" content={Settings} defaultSelected />
      <Tabs.Tab label="Addons" />
      <Tabs.Tab label="Connections" />
      <Tabs.Tab label="Advanced" />
    </Tabs>
  </div>
)

export default MainArea
