import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.querySelector('#root'))

// store.subscribe(() => {
//   ReactDOM.render(<App/>, document.querySelector('#root'))
// })
