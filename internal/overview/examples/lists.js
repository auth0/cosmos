import React from 'react'

import Section from '../components/section'
import Example from '../components/example'

import { List } from '@auth0/cosmos'

const ListsExample = () => (
  <Section>
    <Example title="List">
      <List>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </List>
    </Example>
  </Section>
)

export default ListsExample
