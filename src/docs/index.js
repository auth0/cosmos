import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Grid, Column } from '../components/_helpers/grid'
import Sidebar from './sidebar'
import Spec from './spec'
import Home from './home'

export default () => (
  <Router>
    <Grid>
      <Column width="20%">
        <Sidebar />
      </Column>
      <Column width="75%">
        <Switch>
          <Route path="/docs/:componentName" component={Spec} />
          <Route component={Home} />
        </Switch>
      </Column>
    </Grid>
  </Router>
)
