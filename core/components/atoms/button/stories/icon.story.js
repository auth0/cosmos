import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, ButtonGroup } from '@auth0/cosmos'

storiesOf('Button').add('with icon', () => (
  <Example title="Button with icon" align="center">
    <Stack>
      <Button appearance="primary" icon="plus">
        Create Client
      </Button>
      <Button appearance="secondary" icon="play-circle">
        Tutorial
      </Button>
      <Button appearance="link" icon="copy" />
      <Button icon="copy" label="Copy to Clipboard" />
      <Button icon="chevron-left">Previous page</Button>
      <Button iconAlign="right" icon="chevron-right">
        Next page
      </Button>
    </Stack>
  </Example>
))
