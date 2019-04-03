import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'

import { Code } from '../../'

storiesOf('Code', module).add('default', () => (
  <Example title="Code">
    This is a <Code>special</Code> word
  </Example>
))
