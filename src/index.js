import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'

import Overview from './overview/'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Overview} />
    </div>
  </Router>,
  document.getElementById('root')
)
