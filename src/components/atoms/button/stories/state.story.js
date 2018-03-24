import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading, Button, ButtonGroup } from 'auth0-cosmos'

storiesOf('Button').add('state', () => (
  <div>
    <Heading size={4}>state</Heading>
    <ButtonGroup>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button success>Success</Button>
    </ButtonGroup>
  </div>
))
