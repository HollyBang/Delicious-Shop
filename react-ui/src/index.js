import "babel-polyfill";
import React,{Component}  from  'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App.js';
import '../public/favicon.ico';

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga';


import rootSaga from './sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const middleWare = [logger, sagaMiddleware]

const store = createStore(
    rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleWare)),
)
sagaMiddleware.run(rootSaga);

ReactDom.render(
    <Provider store = {store}><App /></Provider>,
    document.getElementById('app')
);