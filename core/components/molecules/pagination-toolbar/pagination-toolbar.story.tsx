import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'
import { PaginationToolbar } from '../../'

storiesOf('Pagination Toolbar', module).add('default', () => (
  <Example>
    <PaginationToolbar items={20372} perPage={10} page={3} />
  </Example>
))

storiesOf('Pagination Toolbar', module).add('first page', () => (
  <Example>
    <PaginationToolbar items={20372} perPage={10} page={1} />
  </Example>
))

storiesOf('Pagination Toolbar', module).add('last page', () => (
  <Example>
    <PaginationToolbar items={20372} perPage={10} page={2038} />
  </Example>
))

storiesOf('Pagination Toolbar', module).add('not enough items', () => (
  <Example>
    <div>toolbar should not be visible if there are not enough items for multiple pages</div>
    <PaginationToolbar page={1} items={5} perPage={10} />
    <PaginationToolbar page={0} items={0} perPage={10} />
  </Example>
))
