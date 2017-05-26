"use strict"

if (module.hot) {
  module.hot.accept()
}

require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./app.html');
require.context('./assets');

import { hoverHandler } from './components/hover-handler.js';
import { frameHover } from './components/frame-hover.js';
import { frameGenerator } from './components/frame-generator.js';
import { nextPage } from './components/next-page.js';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import * as actions from './actions';
import thunk from 'redux-thunk'

export const store = createStore(
    reducers.employees,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)

store.dispatch(actions.bootstrap());
