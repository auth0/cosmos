import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading, Button, ButtonGroup } from 'auth0-cosmos'

storiesOf('Button').add('appearance + state', () => (
  <div>
    <Heading size={4}>default</Heading>
    <ButtonGroup>
      <Button>Default</Button>
      <Button appearance="primary">Primary</Button>
      <Button appearance="transparent">Transparent</Button>
      <Button appearance="destructive">Destructive</Button>
      <Button appearance="link">Link</Button>
    </ButtonGroup>

    <Heading size={4}>disabled</Heading>
    <ButtonGroup>
      <Button disabled>Default</Button>
      <Button disabled appearance="primary">
        Primary
      </Button>
      <Button disabled appearance="transparent">
        Transparent
      </Button>
      <Button disabled appearance="destructive">
        Destructive
      </Button>
      <Button disabled appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>loading</Heading>
    <ButtonGroup>
      <Button loading>Default</Button>
      <Button loading appearance="primary">
        Primary
      </Button>
      <Button loading appearance="transparent">
        Transparent
      </Button>
      <Button loading appearance="destructive">
        Destructive
      </Button>
      <Button loading appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>success</Heading>
    <ButtonGroup>
      <Button success>Default</Button>
      <Button success appearance="primary">
        Primary
      </Button>
      <Button success appearance="transparent">
        Transparent
      </Button>
      <Button success appearance="destructive">
        Destructive
      </Button>
      <Button success appearance="link">
        Link
      </Button>
    </ButtonGroup>
  </div>
))
