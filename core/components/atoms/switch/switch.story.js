import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Switch } from '@auth0/cosmos'

storiesOf('Switch', module).add('default', () => (
  <Example title="Switch">
    <Switch onChange={value => console.log(value)} />
  </Example>
))

storiesOf('Switch', module).add('left label', () => (
  <Example title="Switch">
    <Switch onChange={value => console.log(value)} labelPosition="left" />
  </Example>
))

storiesOf('Switch', module).add('on', () => (
  <Example title="Switch">
    <Switch on onChange={value => console.log(value)} />
  </Example>
))

storiesOf('Switch', module).add('readonly', () => (
  <Example title="Switch">
    <Switch readOnly />
    <Switch on readOnly />
  </Example>
))

storiesOf('Switch', module).add('accessibility labels', () => (
  <Example title="Switch">
    <Switch accessibleLabels={[]} onChange={() => {}} />
    <Switch accessibleLabels={['ON', 'OFF']} onChange={() => {}} />
    <Switch on accessibleLabels={['ON', 'OFF']} onChange={() => {}} />
  </Example>
))

storiesOf('Switch', module).add('hidden accessibility labels', () => (
  <Example title="Switch">
    <Switch hideAccessibleLabels onChange={() => {}} />
  </Example>
))
