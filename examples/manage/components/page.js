import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import SideNavigation from './side-navigation'
import WelcomeIndex from '../pages/welcome'
import ClientIndex from '../pages/clients'
import ClientDetail from '../pages/client-detail'
import EmailsIndex from '../pages/emails'
import RulesIndex from '../pages/rules'
import SsoIndex from '../pages/sso-integrations'
import AnomalyDetectionIndex from '../pages/anomaly-detection'
import LogsIndex from '../pages/slogs'
import ApisIndex from '../pages/apis'
import UsersIndex from '../pages/users'
import HostedPagesIndex from '../pages/hosted-pages'

const Page = () => (
  <Router>
    <React.Fragment>
      <SideNavigation />
      <div
        style={{
          width: '836px',
          marginLeft: '198px',
          paddingBottom: '50px'
        }}
      >
        <Route exact path="/welcome" component={WelcomeIndex} />
        <Route exact path="/clients" component={ClientIndex} />
        <Route exact path="/clients/:clientId" component={ClientDetail} />
        <Route exact path="/emails" component={EmailsIndex} />
        <Route exact path="/rules" component={RulesIndex} />
        <Route exact path="/logs" component={LogsIndex} />
        <Route exact path="/users" component={UsersIndex} />
        <Route exact path="/apis" component={ApisIndex} />
        <Route exact path="/anomaly" component={AnomalyDetectionIndex} />
        <Route exact path="/sso-integrations" component={SsoIndex} />
        <Route exact path="/hosted-pages" component={HostedPagesIndex} />
      </div>
    </React.Fragment>
  </Router>
)

export default Page
