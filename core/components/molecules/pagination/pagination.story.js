import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Pagination } from '@auth0/cosmos'

storiesOf('Pagination').add('default', () => (
  <Example>
    <Pagination items={20372} perPage={10} page={3} />
  </Example>
))
