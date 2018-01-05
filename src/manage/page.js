import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Dummy, Dummy as PageHeader, Dummy as Tabs } from './dummy-components'
import { Heading2 } from '../components'

import ClientList from './client-list'
import Client from './client'

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
    <PageHeader />
    <Heading2>Clients</Heading2>
    <Router>
      <div>
        <Route exact path="/clients" component={ClientList} />
        <Route exact path="/clients/:clientId" component={Client} />
      </div>
    </Router>
  </div>
)

export default Page
