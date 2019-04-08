import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '../../_helpers/story-helpers'

import { Radio } from '../../'

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

storiesOf('Radio', module).add('long label', () => (
  <Example>
    <Radio name="example1" selected="one">
      <Radio.Option value="one">Option 1 (short label)</Radio.Option>
      <Radio.Option value="two">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur vestibulum sapien,
        lacinia vulputate purus porttitor sit amet. Etiam tincidunt eget diam at semper. Nulla
        pharetra odio vitae pharetra aliquet. Cras enim quam, maximus et molestie ut, rutrum vitae
        lacus. Pellentesque pretium mi et sapien varius elementum. Phasellus egestas condimentum
        tortor vel eleifend. Fusce lobortis varius mattis. Nam varius velit at quam rhoncus, a
        efficitur elit ultrices. Donec sollicitudin auctor tincidunt. In congue molestie nisi id
        egestas. Phasellus ac sodales leo. Vestibulum nec faucibus nibh, in efficitur urna. Fusce
        fermentum convallis condimentum. (long label)
      </Radio.Option>
    </Radio>
  </Example>
))
