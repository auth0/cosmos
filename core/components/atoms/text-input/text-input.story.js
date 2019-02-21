import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, TextInput, Tooltip } from '@auth0/cosmos'

storiesOf('TextInput', module).add('simple', () => (
  <Example title="simple">
    <TextInput type="text" placeholder="Enter some text" />
  </Example>
))

storiesOf('TextInput', module).add('default value', () => (
  <Example title="default value">
    <TextInput type="text" defaultValue="This is plain text field value" />
  </Example>
))

storiesOf('TextInput', module).add('password', () => (
  <Example title="password">
    <TextInput type="password" defaultValue="password" />
  </Example>
))

storiesOf('TextInput', module).add('code', () => (
  <Example title="password">
    <TextInput code defaultValue="DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip" />
  </Example>
))

storiesOf('TextInput', module).add('readonly', () => (
  <Example title="password">
    <TextInput readOnly placeholder="Placeholder text" />
    <br />
    <br />
    <TextInput readOnly defaultValue="Default value" />
  </Example>
))

storiesOf('TextInput', module).add('masked', () => (
  <Example title="masked">
    <TextInput defaultValue="secret-client-hash" masked />
  </Example>
))

storiesOf('TextInput', module).add('sizes', () => (
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

const sampleAsyncAction = event => new Promise(resolve => setTimeout(resolve, 900))
const sampleAsyncFailingAction = event => new Promise((_, reject) => setTimeout(reject, 900))

storiesOf('TextInput').add('with actions as buttons', () => (
  <Example title="with actions as buttons">
    <TextInput
      type="text"
      placeholder="Enter some text"
      actions={[
        <Tooltip.Action
          content={{
            default: 'Copy',
            loading: 'Copying...',
            success: 'Copied!',
            error: 'Could not copy'
          }}
        >
          <Button icon="copy" onClick={e => console.log(e)} />
        </Tooltip.Action>,
        <Tooltip.Action
          content={{
            default: 'Do work',
            loading: 'Working...',
            success: 'Done!',
            error: 'Could not work'
          }}
        >
          <Button icon="wrench" onClick={sampleAsyncAction} />
        </Tooltip.Action>,
        <Tooltip.Action
          content={{
            default: 'Do work',
            loading: 'Working...',
            success: 'Done!',
            error: 'Could not work'
          }}
        >
          <Button icon="reload" onClick={sampleAsyncFailingAction} />
        </Tooltip.Action>,
        <Button icon="delete" onClick={e => console.log(e)} />
      ]}
    />
  </Example>
))

class InteractiveExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = { working: false }
  }

  exampleAsyncTask() {
    this.setState({ working: true })
    return new Promise(resolve =>
      setTimeout(() => {
        this.setState({ working: false })
        resolve()
      }, 500)
    )
  }

  render() {
    return (
      <TextInput
        type="text"
        placeholder="Enter some text"
        actions={[
          <Tooltip.Action
            content={{
              default: 'Do work',
              loading: 'Working...',
              success: 'Done!',
              error: 'Could not work'
            }}
          >
            <Button
              disabled={this.state.working}
              icon="wrench"
              onClick={this.exampleAsyncTask.bind(this)}
            />
          </Tooltip.Action>
        ]}
      />
    )
  }
}

storiesOf('TextInput').add('interactive example', () => (
  <Example title="with actions as buttons">
    <InteractiveExample />
  </Example>
))
