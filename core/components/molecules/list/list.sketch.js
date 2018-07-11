import React from 'react'
import { storiesOf } from '@storybook/react'

import { List, Stack } from '@auth0/cosmos'

storiesOf('List', module).add('simple', () => (
  <List>
    <div>one</div>
    <div>two</div>
    <div>three</div>
  </List>
))

storiesOf('List', module).add('with label', () => (
  <List label="Short List">
    <div>one</div>
    <div>two</div>
    <div>three</div>
  </List>
))

storiesOf('List', module).add('list with multiple columns', () => (
  <List label="Social">
    <Stack>
      <div>github</div>
      <div>GitHub</div>
      <a href="https://github.com">github.com</a>
    </Stack>
    <Stack>
      <div>google-oauth2</div>
      <div>Google</div>
      <a href="https://google.com">google.com</a>
    </Stack>
  </List>
))
