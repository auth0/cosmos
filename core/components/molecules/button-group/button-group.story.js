import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { ButtonGroup, Button, Box } from '@auth0/cosmos'

storiesOf('ButtonGroup').add('default', () => (
  <Example title="default">
    <ButtonGroup>
      <Button appearance="primary">Save changes</Button>
      <Button appearance="secondary" icon="play">
        Try
      </Button>
    </ButtonGroup>
  </Example>
))

storiesOf('ButtonGroup').add('alignment', () => (
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

storiesOf('ButtonGroup').add('single button', () => (
  <div>
    <Example title="left with explicit borders">
      <ButtonGroup align="left">
        <div style={{ border: '1px solid red' }}>
          <Button appearance="secondary">Save changes</Button>
        </div>
      </ButtonGroup>
    </Example>
    <Example title="left with explicit borders">
      <ButtonGroup align="left">
        <div style={{ border: '1px solid red' }}>
          <Button appearance="secondary">Save changes</Button>
        </div>
        <div style={{ border: '1px solid red' }}>
          <Button appearance="secondary">Save changes</Button>
        </div>
      </ButtonGroup>
    </Example>
    <Example title="right with explicit borders">
      <ButtonGroup align="right">
        <div style={{ border: '1px solid red' }}>
          <Button appearance="secondary">Save changes</Button>
        </div>
      </ButtonGroup>
    </Example>
    <Example title="right with explicit borders">
      <ButtonGroup align="right">
        <div style={{ border: '1px solid red' }}>
          <Button appearance="secondary">Save changes</Button>
        </div>
        <div style={{ border: '1px solid red' }}>
          <Button appearance="secondary">Save changes</Button>
        </div>
      </ButtonGroup>
    </Example>
  </div>
))

storiesOf('ButtonGroup').add('icons', () => (
  <Example title="Icons">
    <ButtonGroup>
      <Button icon="pencil" />
      <Button icon="copy" />
      <Button icon="delete" />
    </ButtonGroup>
  </Example>
))

storiesOf('ButtonGroup').add('compressed', () => (
  <div>
    <Example title="Compressed buttons">
      <ButtonGroup compressed>
        <Button>Copy</Button> <Button>Paste</Button>
      </ButtonGroup>
    </Example>
    <Example title="compressed icons">
      <ButtonGroup compressed>
        <Button icon="pencil" /> <Button icon="copy" /> <Button icon="delete" />
      </ButtonGroup>
    </Example>
  </div>
))
