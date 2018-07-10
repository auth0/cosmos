import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Spinner } from '@auth0/cosmos'

storiesOf('Spinner').add('default', () => (
  <Example title="Spinner">
    <Spinner />
  </Example>
))

storiesOf('Spinner').add('dark background', () => (
  <Example title="Spinner" background="dark">
    <Spinner inverse />
  </Example>
))
