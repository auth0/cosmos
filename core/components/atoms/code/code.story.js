import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Code } from '@auth0/cosmos'

storiesOf('Code', module).add('default', () => (
  <Example title="Code">
    This is a <Code>special</Code> word
  </Example>
))
