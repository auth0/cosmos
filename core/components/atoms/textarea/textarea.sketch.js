import React from 'react'
import { storiesOf } from '@storybook/react'

import { TextArea } from '@auth0/cosmos'

storiesOf('TextArea', module).add('default', () => (
  <TextArea length={1} placeholder="Small TextArea" />
))

storiesOf('TextArea', module).add('longer', () => (
  <TextArea length={7} placeholder="Really long TextArea" />
))

storiesOf('TextArea', module).add('not resizable', () => (
  <TextArea resizable={false} placeholder="Can't resize this" />
))

storiesOf('TextArea', module).add('readOnly', () => (
  <TextArea readOnly placeholder="Field is disabled" />
))
