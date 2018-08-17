import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { PaginationToolbar } from '@auth0/cosmos'

storiesOf('Pagination Toolbar').add('default', () => (
  <Example>
    <PaginationToolbar items={20372} perPage={10} page={3} />
  </Example>
))
