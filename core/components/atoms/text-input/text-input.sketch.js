import React from 'react'
import { storiesOf } from '@storybook/react'

import { TextInput } from '@auth0/cosmos'

storiesOf('TextInput', module).add('text', () => (
  <TextInput type="text" defaultValue="This is plain text field value" />
))

storiesOf('TextInput', module).add('password', () => (
  <TextInput type="password" defaultValue="This is a code field" />
))

storiesOf('TextInput', module).add('number', () => <TextInput type="number" defaultValue="1" />)

storiesOf('TextInput', module).add('code', () => (
  <TextInput code defaultValue="DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip" />
))

storiesOf('TextInput', module).add('readOnly', () => (
  <TextInput readOnly placeholder="Field is disabled" />
))

storiesOf('TextInput', module).add('masked', () => (
  <TextInput defaultValue="secret-client-hash" masked />
))
