import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Card } from '@auth0/cosmos'

storiesOf('Card').add('default', () => (
  <Example title="default">
    <Card>
      Card
    </Card>
  </Example>
))

storiesOf('Card').add('disabled', () => (
  <Example title="disabled">
    <Card disabled>
      Card
    </Card>
  </Example>
))

storiesOf('Card').add('checked', () => (
  <Example title="checked">
    <Card checked>
      Card
    </Card>
  </Example>
))

storiesOf('Card').add('backgrounds', () => (
  <Example title="backgrounds">
    <Stack>
      <Card>
        Card
      </Card>
      <Card background="gray">
        Card
      </Card>
    </Stack>
  </Example>
))

storiesOf('Card').add('paddings', () => (
  <Example title="paddings">
    <Stack>
      <Card>
        Card
      </Card>
      <Card padding="small">
        Card
      </Card>
      <Card padding="none">
        Card
      </Card>
    </Stack>
  </Example>
))
