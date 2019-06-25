import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'

import { FileInput, Tooltip } from '../..'

storiesOf('FileInput', module).add('simple', () => (
  <Example title="simple">
    <FileInput files={[]} label="hola" />
  </Example>
))
