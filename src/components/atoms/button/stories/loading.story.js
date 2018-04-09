import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, ButtonGroup } from '@auth0/cosmos'

storiesOf('Button').add('success state', () => (
  <Example title="Loading state" align="center">
    <Stack>
      <Button loading>Default</Button>
      <Button loading appearance="primary">
        Primary
      </Button>
      <Button loading appearance="secondary">
        Secondary
      </Button>
      <Button loading appearance="link">
        Link
      </Button>
      <Button loading appearance="destructive">
        Destructive
      </Button>
    </Stack>
  </Example>
))
