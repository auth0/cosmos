import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'
import { Pagination } from '../../'

storiesOf('Pagination', module).add('default', () => (
  <Example>
    <Pagination items={20372} perPage={10} page={3} />
  </Example>
))
