import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tabs } from '@auth0/cosmos'

storiesOf('Tabs', module).add('default', () => (
  <Tabs>
    <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
    <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
    <Tabs.Tab label="Tab 3">Third tab's the charm!</Tabs.Tab>
  </Tabs>
))
