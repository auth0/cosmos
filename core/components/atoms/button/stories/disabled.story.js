import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, ButtonGroup } from '@auth0/cosmos'

storiesOf('Button', module).add('disabled state', () => (
  <Example title="Disabled state" align="center">
    <Stack>
      <Button disabled>Default</Button>
      <Button disabled appearance="primary">
        Primary
      </Button>
      <Button disabled appearance="secondary">
        Secondary
      </Button>
      <Button disabled appearance="link">
        Link
      </Button>
      <Button disabled appearance="destructive">
        Destructive
      </Button>
    </Stack>
  </Example>
))
