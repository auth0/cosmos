import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Radio } from '@auth0/cosmos'

storiesOf('Radio', module).add('default', () => (
  <Example>
    <Radio name="example1" selected="one">
      <Radio.Option value="one">Option 1</Radio.Option>
      <Radio.Option value="two">Option 2</Radio.Option>
      <Radio.Option value="three" readOnly>
        Option 3
      </Radio.Option>
    </Radio>
  </Example>
))

storiesOf('Radio', module).add('layout horizontal', () => (
  <Example>
    <Radio name="example1" selected="two" align="horizontal">
      <Radio.Option value="one">Option 1</Radio.Option>
      <Radio.Option value="two">Option 2</Radio.Option>
      <Radio.Option value="three" readOnly>
        Option 3
      </Radio.Option>
    </Radio>
  </Example>
))

storiesOf('Radio', module).add('read-only', () => (
  <Example>
    <Radio name="example1" selected="three" readOnly>
      <Radio.Option value="one">Option 1</Radio.Option>
      <Radio.Option value="two">Option 2</Radio.Option>
      <Radio.Option value="three">Option 3</Radio.Option>
    </Radio>
  </Example>
))
