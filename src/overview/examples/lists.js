import React from 'react'

import Section from '../ov-components/section'
import Example from '../ov-components/example'

import { List } from '@auth0/cosmos'
import ConnectionList from '../../manage/components/connection-list'

const ListsExample = () => (
  <Section>
    <Example title="List">
      <List>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </List>
    </Example>
    <Example title="List: Connections">
      <ConnectionList />
    </Example>
  </Section>
)

export default ListsExample
