import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading, Button, ButtonGroup } from 'auth0-cosmos'

storiesOf('Button').add('appearance + size + state', () => (
  <div>
    <Heading size={4}>large + disabled</Heading>
    <ButtonGroup>
      <Button size="large" disabled>
        Default
      </Button>
      <Button size="large" disabled appearance="primary">
        Primary
      </Button>
      <Button size="large" disabled appearance="transparent">
        Transparent
      </Button>
      <Button size="large" disabled appearance="destructive">
        Destructive
      </Button>
      <Button size="large" disabled appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>default + disabled</Heading>
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

    <Heading size={4}>compressed + disabled</Heading>
    <ButtonGroup>
      <Button size="compressed" disabled>
        Default
      </Button>
      <Button size="compressed" disabled appearance="primary">
        Primary
      </Button>
      <Button size="compressed" disabled appearance="transparent">
        Transparent
      </Button>
      <Button size="compressed" disabled appearance="destructive">
        Destructive
      </Button>
      <Button size="compressed" disabled appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>small + disabled</Heading>
    <ButtonGroup>
      <Button size="small" disabled>
        Default
      </Button>
      <Button size="small" disabled appearance="primary">
        Primary
      </Button>
      <Button size="small" disabled appearance="transparent">
        Transparent
      </Button>
      <Button size="small" disabled appearance="destructive">
        Destructive
      </Button>
      <Button size="small" disabled appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>large + loading</Heading>
    <ButtonGroup>
      <Button size="large" loading>
        Default
      </Button>
      <Button size="large" loading appearance="primary">
        Primary
      </Button>
      <Button size="large" loading appearance="transparent">
        Transparent
      </Button>
      <Button size="large" loading appearance="destructive">
        Destructive
      </Button>
      <Button size="large" loading appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>default + loading</Heading>
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

    <Heading size={4}>compressed + loading</Heading>
    <ButtonGroup>
      <Button size="compressed" loading>
        Default
      </Button>
      <Button size="compressed" loading appearance="primary">
        Primary
      </Button>
      <Button size="compressed" loading appearance="transparent">
        Transparent
      </Button>
      <Button size="compressed" loading appearance="destructive">
        Destructive
      </Button>
      <Button size="compressed" loading appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>small + loading</Heading>
    <ButtonGroup>
      <Button size="small" loading>
        Default
      </Button>
      <Button size="small" loading appearance="primary">
        Primary
      </Button>
      <Button size="small" loading appearance="transparent">
        Transparent
      </Button>
      <Button size="small" loading appearance="destructive">
        Destructive
      </Button>
      <Button size="small" loading appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>large + success</Heading>
    <ButtonGroup>
      <Button size="large" success>
        Default
      </Button>
      <Button size="large" success appearance="primary">
        Primary
      </Button>
      <Button size="large" success appearance="transparent">
        Transparent
      </Button>
      <Button size="large" success appearance="destructive">
        Destructive
      </Button>
      <Button size="large" success appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>default + success</Heading>
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

    <Heading size={4}>compressed + success</Heading>
    <ButtonGroup>
      <Button size="compressed" success>
        Default
      </Button>
      <Button size="compressed" success appearance="primary">
        Primary
      </Button>
      <Button size="compressed" success appearance="transparent">
        Transparent
      </Button>
      <Button size="compressed" success appearance="destructive">
        Destructive
      </Button>
      <Button size="compressed" success appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>small + success</Heading>
    <ButtonGroup>
      <Button size="small" success>
        Default
      </Button>
      <Button size="small" success appearance="primary">
        Primary
      </Button>
      <Button size="small" success appearance="transparent">
        Transparent
      </Button>
      <Button size="small" success appearance="destructive">
        Destructive
      </Button>
      <Button size="small" success appearance="link">
        Link
      </Button>
    </ButtonGroup>
  </div>
))
