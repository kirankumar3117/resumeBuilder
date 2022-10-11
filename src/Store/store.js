import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from 'redux'

  import thunk from 'redux-thunk'

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose