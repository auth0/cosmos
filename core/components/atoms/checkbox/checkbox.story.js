import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Checkbox } from '@auth0/cosmos'

const CheckBoxExample = () => (
  <Checkbox.Group name="example1" selected={['one', 'two']}>
    <Checkbox name="one" value="one">
      Option 1
    </Checkbox>
    <Checkbox name="two" value="two">
      Option 2
    </Checkbox>
    <Checkbox name="three" value="three">
      Option 3
    </Checkbox>
    <Checkbox name="four" value="four">
      Option 4
    </Checkbox>
  </Checkbox.Group>
)

storiesOf('Checkbox').add('light', () => (
  <Example>
    <CheckBoxExample />
  </Example>
))

storiesOf('Checkbox').add('dark', () => (
  <Example background="dark">
    <CheckBoxExample />
  </Example>
))
