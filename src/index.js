import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));


const AppStyled = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);


//store.subscribe( () => console.log('store', store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <AppStyled />
  </Provider>,
  document.querySelector('#root')
)