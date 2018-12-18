import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, TextInput } from '@auth0/cosmos'

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

storiesOf('TextInput').add('sizes', () => (
  <Example title="sizes">
    <Stack style={{ marginBottom: '1em' }}>
      <TextInput size="large" defaultValue="Size large" />
      <Button size="large" appearance="primary">
        Button
      </Button>
    </Stack>
    <Stack style={{ marginBottom: '1em' }}>
      <TextInput label="This field has text" defaultValue="Size normal" />
      <Button appearance="primary">Button</Button>
    </Stack>
    <Stack style={{ marginBottom: '1em' }}>
      <TextInput size="compressed" defaultValue="Size compressed" />
      <Button size="compressed" appearance="primary">
        Button
      </Button>
    </Stack>
    <Stack style={{ marginBottom: '1em' }}>
      <TextInput size="small" defaultValue="Size small" />
      <Button size="small" appearance="primary">
        Button
      </Button>
    </Stack>
  </Example>
))

storiesOf('TextInput').add('with actions as shape', () => (
  <Example title="with actions as shape">
    <TextInput
      type="text"
      placeholder="Enter some text"
      actions={[
        { icon: 'copy', label: 'Copy URL', handler: e => console.log(e) },
        { icon: 'delete', label: 'Delete URL', handler: e => console.log(e) }
      ]}
    />
  </Example>
))

storiesOf('TextInput').add('with actions as buttons', () => (
  <Example title="with actions as buttons">
    <TextInput
      type="text"
      placeholder="Enter some text"
      actions={[
        <Button icon="copy" onClick={e => console.log(e)} />,
        <Button icon="delete" onClick={e => console.log(e)} />
      ]}
    />
  </Example>
))
