import React from 'react'
import styled from 'styled-components'

import Section from '../ov-components/section'
import Example from '../ov-components/example'

import ConnectionList from '../../manage/components/connection-list'
import ClientList from '../../manage/components/client-list'

const ListsExample = () => (
  <Section>
    <Example title="List of Connections">
      <ConnectionList />
    </Example>

    <Example title="List of Clients">
      <ClientList />
    </Example>
  </Section>
)

export default ListsExample
