import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, ButtonGroup } from '@auth0/cosmos'

storiesOf('Button').add('appearance', () => (
  <Example title="Appearances">
    <Stack>
      <Button>Button</Button>
      <Button appearance="primary">Primary</Button>
      <Button appearance="secondary">Secondary</Button>
      <Button appearance="link">Link</Button>
      <Button appearance="destructive">Destructive</Button>
      <Button appearance="action">Action</Button>
    </Stack>
  </Example>
))
