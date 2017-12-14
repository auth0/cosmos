import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'

import Overview from './overview/'
import Docs from './docs/'
import Manage from './manage/'
import IsCosmosReadyYet from './is-cosmos-ready-yet'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Overview} />
      <Route path="/manage" component={Manage} />
      <Route path="/docs" component={Docs} />
      <Route path="/is-cosmos-ready-yet" component={IsCosmosReadyYet} />
    </div>
  </Router>,
  document.getElementById('root')
)
