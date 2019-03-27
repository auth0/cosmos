import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { Text } from '@auth0/cosmos'

storiesOf('Text', module).add('default', () => (
  <Example title="Text">
    <Text>Good design is good business</Text>
  </Example>
))

storiesOf('Text', module).add('allcaps', () => (
  <Example title="Text">
    <Text type="allcaps">Good design is good business</Text>
  </Example>
))

storiesOf('Text', module).add('subdued', () => (
  <Example title="Text">
    <Text type="subdued">Good design is good business</Text>
  </Example>
))
