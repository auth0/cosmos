import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { ButtonGroup, Button } from '@auth0/cosmos'

storiesOf('ButtonGroup', module).add('default', () => (
  <Example title="default">
    <ButtonGroup>
      <Button appearance="primary">Save changes</Button>
      <Button appearance="secondary" icon="play">
        Try
      </Button>
    </ButtonGroup>
  </Example>
))

storiesOf('ButtonGroup', module).add('alignment', () => (
  <div>
    <Example title="default/left">
      <ButtonGroup align="left">
        <Button appearance="primary">Save changes</Button>
        <Button appearance="secondary" icon="play">
          Try
        </Button>
      </ButtonGroup>
    </Example>
    <Example title="right">
      <ButtonGroup align="right">
        <Button appearance="primary">Save changes</Button>
        <Button appearance="secondary" icon="play">
          Try
        </Button>
      </ButtonGroup>
    </Example>
  </div>
))

storiesOf('ButtonGroup', module).add('single button margin', () => (
  <div>
    <Example title="left single">
      <ButtonGroup align="left">
        <Button appearance="secondary">Save changes</Button>
      </ButtonGroup>
    </Example>
    <Example title="left">
      <ButtonGroup align="left">
        <Button appearance="secondary">Save changes</Button>
        <Button appearance="secondary">Save changes</Button>
      </ButtonGroup>
    </Example>
    <Example title="right single">
      <ButtonGroup align="right">
        <Button appearance="secondary">Save changes</Button>
      </ButtonGroup>
    </Example>
    <Example title="right">
      <ButtonGroup align="right">
        <Button appearance="secondary">Save changes</Button>
        <Button appearance="secondary">Save changes</Button>
      </ButtonGroup>
    </Example>
  </div>
))

storiesOf('ButtonGroup', module).add('icons', () => (
  <Example title="Icons">
    <ButtonGroup>
      <Button icon="pencil" />
      <Button icon="copy" />
      <Button icon="delete" />
    </ButtonGroup>
  </Example>
))

storiesOf('ButtonGroup', module).add('compressed', () => (
  <div>
    <Example title="Compressed buttons">
      <ButtonGroup compressed>
        <Button>Copy</Button>
        <Button>Paste</Button>
      </ButtonGroup>
    </Example>
    <Example title="compressed icons">
      <ButtonGroup compressed>
        <Button icon="pencil" />
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </Example>
  </div>
))
