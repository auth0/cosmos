import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading, Button, ButtonGroup } from 'auth0-cosmos'

storiesOf('Button').add('appearance + size', () => (
  <div>
    <Heading size={4}>large size</Heading>
    <ButtonGroup>
      <Button size="large">Default</Button>
      <Button size="large" appearance="primary">
        Primary
      </Button>
      <Button size="large" appearance="transparent">
        Transparent
      </Button>
      <Button size="large" appearance="destructive">
        Destructive
      </Button>
      <Button size="large" appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>default size</Heading>
    <ButtonGroup>
      <Button>Default</Button>
      <Button appearance="primary">Primary</Button>
      <Button appearance="transparent">Transparent</Button>
      <Button appearance="destructive">Destructive</Button>
      <Button appearance="link">Link</Button>
    </ButtonGroup>

    <Heading size={4}>compressed size</Heading>
    <ButtonGroup>
      <Button size="compressed">Default</Button>
      <Button size="compressed" appearance="primary">
        Primary
      </Button>
      <Button size="compressed" appearance="transparent">
        Transparent
      </Button>
      <Button size="compressed" appearance="destructive">
        Destructive
      </Button>
      <Button size="compressed" appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>small size</Heading>
    <ButtonGroup>
      <Button size="small">Default</Button>
      <Button size="small" appearance="primary">
        Primary
      </Button>
      <Button size="small" appearance="transparent">
        Transparent
      </Button>
      <Button size="small" appearance="destructive">
        Destructive
      </Button>
      <Button size="small" appearance="link">
        Link
      </Button>
    </ButtonGroup>
  </div>
))
