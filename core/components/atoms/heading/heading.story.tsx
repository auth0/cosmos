import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'

import { Heading } from '../../'

storiesOf('Heading', module).add('sizes', () => (
  <Example title="Sizes">
    <Heading size={1}>Good design is good business</Heading>
    <Heading size={2}>Good design is good business</Heading>
    <Heading size={3}>Good design is good business</Heading>
    <Heading size={4}>Good design is good business</Heading>
  </Example>
))
