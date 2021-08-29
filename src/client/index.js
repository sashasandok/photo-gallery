import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { render } from 'react-dom'
import App from './containers/App'
import ErrorBoundary from './components/ErrorBoundary'
import 'antd/dist/antd.css'
import './main.scss'

render(
<Provider store={store}>
  <ErrorBoundary>
    <App/>
  </ErrorBoundary>
</Provider>,
document.getElementById('root'))
