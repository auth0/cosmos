import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading, Button, ButtonGroup } from 'auth0-cosmos'

storiesOf('Button').add('size', () => (
  <div>
    <Heading size={4}>default size</Heading>
    <ButtonGroup>
      <Button size="large">Large</Button>
      <Button>Default</Button>
      <Button size="compressed">Compressed</Button>
      <Button size="small">Small</Button>
    </ButtonGroup>
  </div>
))
