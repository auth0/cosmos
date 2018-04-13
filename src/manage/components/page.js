import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ClientIndex from '../pages/clients'
import ClientDetail from '../pages/client-detail'
import EmailsIndex from '../pages/emails'

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
        <Route exact path="/manage/clients" component={ClientIndex} />
        <Route exact path="/manage/clients/:clientId" component={ClientDetail} />
        <Route exact path="/manage/emails" component={EmailsIndex} />
      </div>
    </Router>
  </div>
)

export default Page
