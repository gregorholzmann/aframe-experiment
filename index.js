"use strict"

if (module.hot) {
  module.hot.accept()
}

import { hoverHandler } from './components/hover-handler.js';
import { frameHover } from './components/frame-hover.js';
import { frameGenerator } from './components/frame-generator.js';
import * as reducers from './reducers';
import * as actions from './actions';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

let store = createStore(reducers.employees, applyMiddleware(thunk)); 
window.store = store;

store.dispatch(actions.bootstrap());