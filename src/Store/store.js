import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux'

import thunk from 'redux-thunk'
import { SET_THEME_REDUCER } from './Theme/theme.reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({theme:SET_THEME_REDUCER})

export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))