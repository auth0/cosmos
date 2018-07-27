import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/with-cosmos'

ReactDOM.render(<App />, document.getElementById('root'))

if (module && module.hot) module.hot.accept()
