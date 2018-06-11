import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'

import Overview from './overview/'
import Manage from './manage/'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Overview} />
      <Route path="/manage" component={Manage} />
    </div>
  </Router>,
  document.getElementById('root')
)
