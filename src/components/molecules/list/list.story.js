import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { List, Switch } from '@auth0/cosmos'

storiesOf('List').add('default', () => (
  <Example title="default">
    <List label="Short List">
      <div>one</div>
      <div>two</div>
      <div>three</div>
    </List>
  </Example>
))

storiesOf('List').add('with stack', () => (
  <Example title="with stack">
    <List label="Social">
      <Stack>
        <div>github</div>
        <div>GitHub</div>
        <Switch on />
      </Stack>
      <Stack>
        <div>google-oauth2</div>
        <div>Google</div>
        <Switch />
      </Stack>
    </List>
  </Example>
))
