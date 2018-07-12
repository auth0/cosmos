import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Label } from '@auth0/cosmos'

storiesOf('Label').add('appearances', () => (
  <Example title="appearances">
    <Stack>
      <Label appearance="default">Default</Label>
      <Label appearance="information">Information</Label>
      <Label appearance="success">Success</Label>
      <Label appearance="warning">Warning</Label>
      <Label appearance="danger">Danger</Label>
    </Stack>
  </Example>
))

storiesOf('Label').add('no appearance specified', () => (
  <Example title="no appearance specified">
    <Label>Example</Label>
  </Example>
))
