import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore , applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger/src";
import thunkMiddleware from 'redux-thunk'


import './index.css';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import App from './Containers/App/App';
import {searchRobots, requestRobots} from "./Containers/App/reducers";


const logger = createLogger();
//Store in redux ==> source of the truth, describe all the states
// put the root reducer, the combination of all the reducers.
// searchRobot is the only reducer we have now, but when app grows, we cannot put it directly here.

//can combine different reducers together
const rootReducer = combineReducers({ searchRobots, requestRobots })

// added thunk middleware to the store, it goes through the middlewares by the order.
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))


ReactDOM.render(
  <React.StrictMode>
      {/*all the components inside Provider will have the store*/}
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
