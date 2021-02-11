import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import './index.css'
import App from './App'
import loginReducer from './store/reducers/loginReducer'
import { localState } from './store/localStorage/localData'

const persistedState = localState()

const rootReducer = combineReducers({
  userGmailData: loginReducer,
})

const store = createStore(rootReducer, persistedState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
