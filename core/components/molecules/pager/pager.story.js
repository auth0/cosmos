import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Pager } from '@auth0/cosmos'

storiesOf('Pager', module).add('default', () => (
  <Example>
    <Pager items={20372} perPage={10} page={3} />
  </Example>
))

storiesOf('Pager', module).add('without items', () => (
  <Example>
    <Pager perPage={10} page={3} />
  </Example>
))
