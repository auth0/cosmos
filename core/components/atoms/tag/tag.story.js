import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Tag } from '@auth0/cosmos'

storiesOf('Tag').add('default', () => (
  <Example title="Tag">
    <Tag onClick={evt => false} onRemove={evt => false}>
      Example
    </Tag>
  </Example>
))

storiesOf('Tag').add('without remove callback', () => (
  <Example title="Tag">
    <Tag onClick={evt => false}>Example</Tag>
  </Example>
))

storiesOf('Tag').add('tag group', () => (
  <Example title="Tag">
    <Tag.Group>
      <Tag onRemove={evt => false}>One</Tag>
      <Tag onRemove={evt => false}>Two</Tag>
      <Tag onRemove={evt => false}>Three</Tag>
      <Tag onRemove={evt => false}>Four</Tag>
      <Tag onRemove={evt => false}>Five</Tag>
    </Tag.Group>
  </Example>
))
