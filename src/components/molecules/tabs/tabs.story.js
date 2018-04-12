import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { Tabs } from '@auth0/cosmos'

storiesOf('Tabs').add('default', () => (
  <Example title="default">
    <Tabs>
      <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
      <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
      <Tabs.Tab label="Tab 3">Look, third tab is selected by default!</Tabs.Tab>
    </Tabs>
  </Example>
))

storiesOf('Tabs').add('default selected', () => (
  <Example title="default">
    <Tabs>
      <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
      <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
      <Tabs.Tab selected label="Tab 3">
        Look, third tab is selected by default!
      </Tabs.Tab>
    </Tabs>
  </Example>
))
