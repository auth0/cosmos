import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { TextInput } from '@auth0/cosmos'

storiesOf('TextInput').add('simple', () => (
  <Example title="simple">
    <TextInput type="text" placeholder="Enter some text" />
  </Example>
))

storiesOf('TextInput').add('default value', () => (
  <Example title="default value">
    <TextInput type="text" defaultValue="This is plain text field value" />
  </Example>
))

storiesOf('TextInput').add('password', () => (
  <Example title="password">
    <TextInput type="password" defaultValue="password" />
  </Example>
))

storiesOf('TextInput').add('code', () => (
  <Example title="password">
    <TextInput code defaultValue="DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip" />
  </Example>
))

storiesOf('TextInput').add('readonly', () => (
  <Example title="password">
    <TextInput readOnly placeholder="Placeholder text" />
    <br />
    <br />
    <TextInput readOnly defaultValue="Default value" />
  </Example>
))

storiesOf('TextInput').add('masked', () => (
  <Example title="masked">
    <TextInput defaultValue="secret-client-hash" masked />
  </Example>
))
