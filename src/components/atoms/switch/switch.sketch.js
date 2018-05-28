import React from 'react'
import { storiesOf } from '@storybook/react'

import { Switch } from '@auth0/cosmos'

storiesOf('Switch', module).add('default', () => <Switch onToggle={value => console.log(value)} />)

storiesOf('Switch', module).add('on state', () => (
  <Switch on onToggle={value => console.log(value)} />
))

storiesOf('Switch', module).add('readOnly', () => (
  <Switch readOnly onToggle={value => console.log(value)} />
))

storiesOf('Switch', module).add('on + readOnly', () => (
  <Switch on readOnly onToggle={value => console.log(value)} />
))

storiesOf('Switch', module).add('custom labels', () => (
  <Switch accessibleLabels={['ON', 'OFF']} onToggle={value => console.log(value)} />
))
