import React from 'react'

import { Dummy, Dummy as PageHeader, Dummy as Tabs } from './dummy-components'
import { Heading2 } from '../components'

import Settings from './settings'
Tabs.Tab = Dummy

const Page = () => (
  <div
    style={{
      float: 'left',
      width: '83%',
      height: '100vh',
      paddingLeft: '36px',
      boxSizing: 'border-box'
    }}
  >
    <Heading2>Clients</Heading2>
    <Settings />
  </div>
)

export default Page
