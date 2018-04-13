import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ClientIndex from '../pages/clients'
import ClientDetail from '../pages/client-detail'

const Page = () => (
  <div
    style={{
      width: '836px',
      marginLeft: '198px',
      paddingBottom: '50px'
    }}
  >
    <Router>
      <div>
        <Route exact path="/clients" component={ClientIndex} />
        <Route exact path="/clients/:clientId" component={ClientDetail} />
      </div>
    </Router>
  </div>
)

export default Page
