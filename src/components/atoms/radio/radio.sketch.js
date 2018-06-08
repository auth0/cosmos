import React from 'react'
import { storiesOf } from '@storybook/react'

import { Radio } from '@auth0/cosmos'

storiesOf('Radio', module).add('default', () => (
  <Radio name="example" selected="one">
    <Radio.Option value="one">Option 1</Radio.Option>
    <Radio.Option value="two">Option 2</Radio.Option>
  </Radio>
))

storiesOf('Radio', module).add('readOnly', () => (
  <Radio name="example" selected="one" readOnly>
    <Radio.Option value="one">Option 1</Radio.Option>
    <Radio.Option value="two">Option 2</Radio.Option>
  </Radio>
))
