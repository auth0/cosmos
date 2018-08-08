import React from 'react'
import { storiesOf, forceReRender } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, Tabs } from '@auth0/cosmos'

storiesOf('Tabs').add('default', () => (
  <Example title="default">
    <Tabs selected={0}>
      <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
      <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
      <Tabs.Tab label="Tab 3">Look, third tab is selected by default!</Tabs.Tab>
    </Tabs>
  </Example>
))

storiesOf('Tabs').add('default selected', () => (
  <Example title="default">
    <Tabs selected={2}>
      <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
      <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
      <Tabs.Tab selected label="Tab 3">
        Look, third tab is selected by default!
      </Tabs.Tab>
    </Tabs>
  </Example>
))

storiesOf('Tabs').add('null tab in children', () => (
  <Example title="default">
    <Tabs selected={0}>
      <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
      {null}
      <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
    </Tabs>
  </Example>
))
