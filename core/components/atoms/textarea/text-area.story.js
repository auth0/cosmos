import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { TextArea } from '@auth0/cosmos'

storiesOf('TextArea').add('simple', () => (
  <Example title="simple">
    <TextArea placeholder="Small text area" />
  </Example>
))

storiesOf('TextArea').add('longer text area', () => (
  <Example title="longer text area">
    <TextArea length={7} placeholder="Small text area" />
  </Example>
))

storiesOf('TextArea').add('disable resize', () => (
  <Example title="disable resize">
    <TextArea resizable={false} placeholder="Can't resize this" />
  </Example>
))

storiesOf('TextArea').add('readonly', () => (
  <Example title="readonly">
    <TextArea readOnly placeholder="Field is disabled" />
  </Example>
))

storiesOf('TextArea').add('with actions', () => (
  <Example title="with actions">
    <TextArea
      placeholder="Small text area"
      actions={[
        { icon: 'copy', label: 'Copy URL', handler: e => console.log(e) },
        { icon: 'delete', label: 'Delete URL', handler: e => console.log(e) }
      ]}
    />
  </Example>
))
