import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'

import { Link } from '@auth0/cosmos'

storiesOf('Link', module).add('default', () => (
  <Example title="default">
    <Link href="https://auth0.com" target="_self">
      Click me!
    </Link>
  </Example>
))

storiesOf('Link', module).add('dark background', () => (
  <Example title="dark background" background="dark">
    <Link href="https://auth0.com" target="_self">
      Click me!
    </Link>
  </Example>
))
