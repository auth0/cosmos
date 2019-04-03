import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '../../_helpers/story-helpers'

import { Tag } from '../../'

storiesOf('Tag', module).add('default', () => (
  <Example title="Tag">
    <Tag onClick={evt => false} onRemove={evt => false}>
      Example
    </Tag>
  </Example>
))

storiesOf('Tag', module).add('without remove callback', () => (
  <Example title="Tag">
    <Tag onClick={evt => false}>Example</Tag>
  </Example>
))

storiesOf('Tag', module).add('tag group', () => (
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

storiesOf('Tag', module).add('stressed', () => (
  <Example title="stressed - 119 characters per tag">
    <Tag.Group>
      <Tag onRemove={evt => false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
        consectetur tellus tristique ut.
      </Tag>
      <Tag onRemove={evt => false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
        consectetur tellus tristique ut.
      </Tag>
      <Tag onRemove={evt => false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
        consectetur tellus tristique ut.
      </Tag>
      <Tag onRemove={evt => false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
        consectetur tellus tristique ut.
      </Tag>
      <Tag onRemove={evt => false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
        consectetur tellus tristique ut.
      </Tag>
    </Tag.Group>
  </Example>
))
