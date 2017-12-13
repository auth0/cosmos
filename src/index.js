import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'

import Overview from './overview/'
import Docs from './docs/'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Overview} />
      <Route path="/docs" component={Docs} />
    </div>
  </Router>,
  document.getElementById('root')
)
