import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { PaginationToolbar } from '@auth0/cosmos'

storiesOf('Pagination Toolbar').add('default', () => (
  <Example>
    <PaginationToolbar items={20372} perPage={10} page={3} />
  </Example>
))

storiesOf('Pagination Toolbar').add('first page', () => (
  <Example>
    <PaginationToolbar items={20372} perPage={10} page={1} />
  </Example>
))

storiesOf('Pagination Toolbar').add('last page', () => (
  <Example>
    <PaginationToolbar items={20372} perPage={10} page={2038} />
  </Example>
))

storiesOf('Pagination Toolbar').add('not enough items', () => (
  <Example>
    <div>toolbar should not be visible if there are not enough items for multiple pages</div>
    <PaginationToolbar items={5} perPage={10} />
    <PaginationToolbar items={0} perPage={10} />
  </Example>
))
