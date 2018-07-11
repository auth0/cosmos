import React from 'react'
import { storiesOf } from '@storybook/react'

import { ButtonGroup, Button } from '@auth0/cosmos'

storiesOf('ButtonGroup', module).add('default', () => (
  <ButtonGroup>
    <Button>Button one</Button>
    <Button>Button two</Button>
    <Button>Button three</Button>
  </ButtonGroup>
))

storiesOf('ButtonGroup', module).add('icon set', () => (
  <ButtonGroup>
    <Button icon="pencil" />
    <Button icon="copy" />
    <Button icon="delete" />
  </ButtonGroup>
))

storiesOf('ButtonGroup', module).add('compressed', () => (
  <ButtonGroup compressed>
    <Button>Copy</Button>
    <Button>Paste</Button>
  </ButtonGroup>
))
