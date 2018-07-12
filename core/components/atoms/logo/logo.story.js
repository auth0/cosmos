import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Logo } from '@auth0/cosmos'

storiesOf('Logo').add('default', () => (
  <Example title="default">
    <Logo />
  </Example>
))

storiesOf('Logo').add('dark background', () => (
  <Example title="dark background" background="dark">
    <Logo />
  </Example>
))
