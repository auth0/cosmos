import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, ButtonGroup } from '@auth0/cosmos'

storiesOf('Button', module).add('appearance-icon', () => (
  <Example title="Appearances">
    <Stack>
      <Button icon="copy">Button</Button>
      <Button icon="copy" appearance="primary">
        Primary
      </Button>
      <Button icon="copy" appearance="secondary">
        Secondary
      </Button>
      <Button icon="copy" appearance="link">
        Link
      </Button>
      <Button icon="copy" appearance="destructive">
        Destructive
      </Button>
    </Stack>
    <br />
    <br />
    <Stack>
      <Button icon="copy" />
      <Button icon="copy" appearance="primary" />
      <Button icon="copy" appearance="secondary" />
      <Button icon="copy" appearance="link" />
      <Button icon="copy" appearance="destructive" />
    </Stack>
  </Example>
))
