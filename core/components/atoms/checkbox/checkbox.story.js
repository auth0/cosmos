import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Checkbox, Paragraph } from '@auth0/cosmos'

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

storiesOf('Checkbox', module).add('light', () => (
  <Example>
    <CheckBoxExample />
  </Example>
))

storiesOf('Checkbox', module).add('dark', () => (
  <Example background="dark">
    <CheckBoxExample />
  </Example>
))

storiesOf('Checkbox', module).add('long label', () => (
  <Example>
    <Checkbox.Group name="example1" selected={['one']}>
      <Checkbox name="one" value="one">
        Option 1 (short label)
      </Checkbox>
      <Checkbox name="two" value="two">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur vestibulum sapien,
        lacinia vulputate purus porttitor sit amet. Etiam tincidunt eget diam at semper. Nulla
        pharetra odio vitae pharetra aliquet. Cras enim quam, maximus et molestie ut, rutrum vitae
        lacus. Pellentesque pretium mi et sapien varius elementum. Phasellus egestas condimentum
        tortor vel eleifend. Fusce lobortis varius mattis. Nam varius velit at quam rhoncus, a
        efficitur elit ultrices. Donec sollicitudin auctor tincidunt. In congue molestie nisi id
        egestas. Phasellus ac sodales leo. Vestibulum nec faucibus nibh, in efficitur urna. Fusce
        fermentum convallis condimentum. (long label)
      </Checkbox>
    </Checkbox.Group>
  </Example>
))

storiesOf('Checkbox', module).add('single checkbox w/ long label', () => (
  <Example>
    <Paragraph>This is one paragraph!</Paragraph>
    <Paragraph>This is another paragraph!</Paragraph>
    <Checkbox name="one" value="one">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur vestibulum sapien,
      lacinia vulputate purus porttitor sit amet. Etiam tincidunt eget diam at semper. Nulla
      pharetra odio vitae pharetra aliquet. Cras enim quam, maximus et molestie ut, rutrum vitae
      lacus. Pellentesque pretium mi et sapien varius elementum. Phasellus egestas condimentum
      tortor vel eleifend. Fusce lobortis varius mattis. Nam varius velit at quam rhoncus, a
      efficitur elit ultrices. Donec sollicitudin auctor tincidunt. In congue molestie nisi id
      egestas. Phasellus ac sodales leo. Vestibulum nec faucibus nibh, in efficitur urna. Fusce
      fermentum convallis condimentum. (long label)
    </Checkbox>
  </Example>
))
