import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ClientList from './client-list'
import Client from './client'

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
    <Router>
      <div>
        <Route exact path="/clients" component={ClientList} />
        <Route exact path="/clients/:clientId" component={Client} />
      </div>
    </Router>
  </div>
)

export default Page
