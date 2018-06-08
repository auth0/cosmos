import React from 'react'
import { storiesOf } from '@storybook/react'

import { Alert } from '@auth0/cosmos'

storiesOf('Alert', module).add('default', () => (
  <Alert
    type="default"
    title="Notice!"
    text="This is an important message!"
    link="https://auth0.com"
  />
))

storiesOf('Alert', module).add('information', () => (
  <Alert
    type="information"
    title="Notice!"
    text="This is an important message!"
    link="https://auth0.com"
  />
))

storiesOf('Alert', module).add('success', () => (
  <Alert
    type="success"
    title="Notice!"
    text="This is an important message!"
    link="https://auth0.com"
  />
))

storiesOf('Alert', module).add('warning', () => (
  <Alert
    type="warning"
    title="Notice!"
    text="This is an important message!"
    link="https://auth0.com"
  />
))

storiesOf('Alert', module).add('danger', () => (
  <Alert
    type="danger"
    title="Notice!"
    text="This is an important message!"
    link="https://auth0.com"
  />
))
