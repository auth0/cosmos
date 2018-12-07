import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Switch } from '@auth0/cosmos'

storiesOf('Switch').add('default', () => (
  <Example title="Switch">
    <Switch onToggle={value => console.log(value)} />
  </Example>
))

storiesOf('Switch').add('left label', () => (
  <Example title="Switch">
    <Switch onToggle={value => console.log(value)} labelPosition="left" />
  </Example>
))

storiesOf('Switch').add('on', () => (
  <Example title="Switch">
    <Switch on onToggle={value => console.log(value)} />
  </Example>
))

storiesOf('Switch').add('readonly', () => (
  <Example title="Switch">
    <Switch readOnly />
    <Switch on readOnly />
  </Example>
))

storiesOf('Switch').add('accessibility labels', () => (
  <Example title="Switch">
    <Switch accessibleLabels={[]} onToggle={() => {}} />
    <Switch accessibleLabels={['ON', 'OFF']} onToggle={() => {}} />
    <Switch on accessibleLabels={['ON', 'OFF']} onToggle={() => {}} />
  </Example>
))
