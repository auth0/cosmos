import React from 'react'
import ReactDOM from 'react-dom'

const App = () => <div>reload fine</div>

ReactDOM.render(<App />, document.getElementById('root'))

module.hot.accept()
