import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { Pager } from '../../'
import { Example } from '../../_helpers/story-helpers'

storiesOf('Pager', module)
  .add('default', () => (
    <Example>
      <Pager items={20372} perPage={10} page={3} />
    </Example>
  ))
  .add('just page info', () => (
    <Example>
      <Pager page={3} />
    </Example>
  ))
  .add('without info', () => (
    <Example>
      <Pager items={20372} perPage={10} page={3} showInfo={false} />
    </Example>
  ))
  .add('with explicit zero items', () => (
    <Example>
      <Pager page={1} items={0} perPage={50} />
    </Example>
  ))
