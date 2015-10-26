// import * as reducers from './reducers/index';
// import { combineReducers } from 'redux-immutable';
// const reducer = comibineReducers(reducers);

import reducers from './reducers';
import { createStore } from 'redux';
import { Map, List } from 'immutable';

export default createStore(reducers, Map({ signals: List()}));
