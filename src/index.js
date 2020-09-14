import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import App from './App'

const render = (Component) => {
  return ReactDOM.render(<Component />, document.getElementById('root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}

serviceWorker.unregister()
