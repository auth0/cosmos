import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading, Button, ButtonGroup } from 'auth0-cosmos'

storiesOf('Button').add('appearance', () => (
  <div>
    <Heading size={4}>default size</Heading>
    <ButtonGroup>
      <Button>Default</Button>
      <Button appearance="primary">Primary</Button>
      <Button appearance="transparent">Transparent</Button>
      <Button appearance="destructive">Destructive</Button>
      <Button appearance="link">Link</Button>
    </ButtonGroup>
  </div>
))
