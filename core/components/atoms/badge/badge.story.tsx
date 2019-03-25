import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Badge } from '@auth0/cosmos'

storiesOf('Badge', module).add('appearances', () => (
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

storiesOf('Badge', module).add('no appearance specified', () => (
  <Example title="no appearance specified">
    <Badge>99</Badge>
  </Example>
))

storiesOf('Badge', module).add('stressed', () => (
  <Example title="stressed">
    <div>
      <Badge appearance="default">
        100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      </Badge>
    </div>
    <div>
      <Badge appearance="information">
        100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      </Badge>
    </div>
    <div>
      <Badge appearance="success">
        100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      </Badge>
    </div>
    <div>
      <Badge appearance="warning">
        100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      </Badge>
    </div>
    <div>
      <Badge appearance="danger">
        100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      </Badge>
    </div>
  </Example>
))
