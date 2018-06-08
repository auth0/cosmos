import React from 'react'
import { storiesOf } from '@storybook/react'

import { Stack, Button, TextInput, Switch } from '@auth0/cosmos'

storiesOf('Stack', module).add('simple', () => (
  <Stack>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Stack>
))

storiesOf('Stack', module).add('inline form', () => (
  <Stack>
    <div>Login</div>
    <TextInput type="email" placeholder="email" />
    <TextInput type="password" placeholder="password" />
    <Switch on accessibleLabels={['Remember  me', 'Dont remember me']} />
  </Stack>
))

storiesOf('Stack', module).add('align left', () => (
  <Stack align="left">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Stack>
))

storiesOf('Stack', module).add('align right', () => (
  <Stack align="right">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </Stack>
))

storiesOf('Stack', module).add('custom widths', () => (
  <Stack widths={[10, 30, 30, 30]}>
    <div>Login</div>
    <TextInput type="email" placeholder="email" />
    <TextInput type="password" placeholder="password" />
    <Switch on accessibleLabels={['Remember  me', 'Dont remember me']} />
  </Stack>
))
