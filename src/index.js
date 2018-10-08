import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

// Global styles
// eslint-disable-next-line
injectGlobal`
  * {
    @media (max-width: 480px) {
      transform: scale(0.98);
    }
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #d6e4e0;
    font-family: sans-serif;
    box-sizing: border-box;
  }
`
