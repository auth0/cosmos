import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { TextArea, Button } from '@auth0/cosmos'

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

storiesOf('TextArea').add('with actions as shape', () => (
  <Example title="with actions as shape">
    <TextArea
      placeholder="Small text area"
      actions={[
        { icon: 'copy', label: 'Copy URL', handler: e => console.log(e) },
        { icon: 'delete', label: 'Delete URL', handler: e => console.log(e) }
      ]}
    />
  </Example>
))

storiesOf('TextArea').add('with actions as buttons', () => (
  <Example title="with actions as buttons">
    <TextArea
      placeholder="Small text area"
      actions={[
        <Button icon="copy" onClick={e => console.log(e)} />,
        <Button icon="delete" onClick={e => console.log(e)} />
      ]}
    />
  </Example>
))

storiesOf('TextArea').add('with a copy action', () => (
  <Example title="with a copy action">
    <TextArea
      placeholder="Small text area"
      actions={[<Button icon="copy" onClick={e => console.log(e)} />]}
    />
  </Example>
))
