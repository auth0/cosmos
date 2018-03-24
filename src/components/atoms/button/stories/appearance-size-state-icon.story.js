import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading, Button, ButtonGroup } from 'auth0-cosmos'

storiesOf('Button').add('appearance + size + state + icon', () => (
  <div>
    <Heading size={4}>default + icon</Heading>
    <ButtonGroup>
      <Button icon="delete">Default</Button>
      <Button icon="delete" appearance="primary">
        Primary
      </Button>
      <Button icon="delete" appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" appearance="link">
        Link
      </Button>
    </ButtonGroup>
    <Heading size={4}>large + disabled + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" size="large" disabled>
        Default
      </Button>
      <Button icon="delete" size="large" disabled appearance="primary">
        Primary
      </Button>
      <Button icon="delete" size="large" disabled appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" size="large" disabled appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" size="large" disabled appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>default + disabled + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" disabled>
        Default
      </Button>
      <Button icon="delete" disabled appearance="primary">
        Primary
      </Button>
      <Button icon="delete" disabled appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" disabled appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" disabled appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>compressed + disabled + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" size="compressed" disabled>
        Default
      </Button>
      <Button icon="delete" size="compressed" disabled appearance="primary">
        Primary
      </Button>
      <Button icon="delete" size="compressed" disabled appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" size="compressed" disabled appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" size="compressed" disabled appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>small + disabled + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" size="small" disabled>
        Default
      </Button>
      <Button icon="delete" size="small" disabled appearance="primary">
        Primary
      </Button>
      <Button icon="delete" size="small" disabled appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" size="small" disabled appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" size="small" disabled appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>large + loading + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" size="large" loading>
        Default
      </Button>
      <Button icon="delete" size="large" loading appearance="primary">
        Primary
      </Button>
      <Button icon="delete" size="large" loading appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" size="large" loading appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" size="large" loading appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>default + loading + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" loading>
        Default
      </Button>
      <Button icon="delete" loading appearance="primary">
        Primary
      </Button>
      <Button icon="delete" loading appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" loading appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" loading appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>compressed + loading + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" size="compressed" loading>
        Default
      </Button>
      <Button icon="delete" size="compressed" loading appearance="primary">
        Primary
      </Button>
      <Button icon="delete" size="compressed" loading appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" size="compressed" loading appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" size="compressed" loading appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>small + loading + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" size="small" loading>
        Default
      </Button>
      <Button icon="delete" size="small" loading appearance="primary">
        Primary
      </Button>
      <Button icon="delete" size="small" loading appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" size="small" loading appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" size="small" loading appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>large + success + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" size="large" success>
        Default
      </Button>
      <Button icon="delete" size="large" success appearance="primary">
        Primary
      </Button>
      <Button icon="delete" size="large" success appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" size="large" success appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" size="large" success appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>default + success + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" success>
        Default
      </Button>
      <Button icon="delete" success appearance="primary">
        Primary
      </Button>
      <Button icon="delete" success appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" success appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" success appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>compressed + success + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" size="compressed" success>
        Default
      </Button>
      <Button icon="delete" size="compressed" success appearance="primary">
        Primary
      </Button>
      <Button icon="delete" size="compressed" success appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" size="compressed" success appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" size="compressed" success appearance="link">
        Link
      </Button>
    </ButtonGroup>

    <Heading size={4}>small + success + icon</Heading>
    <ButtonGroup>
      <Button icon="delete" size="small" success>
        Default
      </Button>
      <Button icon="delete" size="small" success appearance="primary">
        Primary
      </Button>
      <Button icon="delete" size="small" success appearance="transparent">
        Transparent
      </Button>
      <Button icon="delete" size="small" success appearance="destructive">
        Destructive
      </Button>
      <Button icon="delete" size="small" success appearance="link">
        Link
      </Button>
    </ButtonGroup>
  </div>
))
