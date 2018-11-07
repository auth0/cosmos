import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, Icon } from '@auth0/cosmos'

storiesOf('Button').add('with icon', () => (
  <Example title="Button with icon" align="center">
    <Stack>
      <Button appearance="primary" icon={<Icon name="plus" />}>
        Create Client
      </Button>
      <Button appearance="secondary" icon={<Icon name="play-circle" />}>
        Tutorial
      </Button>
      <Button appearance="link" icon={<Icon name="copy" />} />
      <Button icon={<Icon name="copy" />} label="Copy to Clipboard" />
      <Button icon={<Icon name="chevron-left" />}>Previous page</Button>
      <Button iconAlign="right" icon={<Icon name="chevron-right" />}>
        Next page
      </Button>
    </Stack>
  </Example>
))
