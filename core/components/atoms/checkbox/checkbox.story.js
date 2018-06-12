import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Checkbox } from '@auth0/cosmos'

const CheckBoxExample = () => (
  <Checkbox.Group name="example1" selected={['one', 'two']}>
    <Checkbox value="one">Option 1</Checkbox>
    <Checkbox value="two">Option 2</Checkbox>
    <Checkbox value="three">Option 3</Checkbox>
    <Checkbox value="four">Option 4</Checkbox>
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
