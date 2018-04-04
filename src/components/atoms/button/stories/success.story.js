import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, ButtonGroup } from '@auth0/cosmos'

storiesOf('Button').add('loading state', () => (
  <Example title="Success state" align="center">
    <Stack>
      <Button success>Default</Button>
      <Button success appearance="primary">
        Primary
      </Button>
      <Button success appearance="secondary">
        Secondary
      </Button>
      <Button success appearance="link">
        Link
      </Button>
      <Button success appearance="destructive">
        Destructive
      </Button>
    </Stack>
  </Example>
))
