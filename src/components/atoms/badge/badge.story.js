import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Badge } from '@auth0/cosmos'

storiesOf('Badge').add('appearances', () => (
  <Example title="appearances">
    <Stack>
      <Badge appearance="default">123</Badge>
      <Badge appearance="information">99</Badge>
      <Badge appearance="success">345</Badge>
      <Badge appearance="warning">6</Badge>
      <Badge appearance="danger">55</Badge>
    </Stack>
  </Example>
))

storiesOf('Badge').add('no appearance specified', () => (
  <Example title="no appearance specified">
    <Badge>99</Badge>
  </Example>
))
