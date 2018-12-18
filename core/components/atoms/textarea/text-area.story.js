import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { TextArea } from '@auth0/cosmos'

storiesOf('TextArea', module).add('simple', () => (
  <Example title="simple">
    <TextArea placeholder="Small text area" />
  </Example>
))

storiesOf('TextArea', module).add('longer text area', () => (
  <Example title="longer text area">
    <TextArea length={7} placeholder="Small text area" />
  </Example>
))

storiesOf('TextArea', module).add('disable resize', () => (
  <Example title="disable resize">
    <TextArea resizable={false} placeholder="Can't resize this" />
  </Example>
))

storiesOf('TextArea', module).add('readonly', () => (
  <Example title="readonly">
    <TextArea readOnly placeholder="Field is disabled" />
  </Example>
))
