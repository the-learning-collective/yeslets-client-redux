import { createStore } from 'redux';
import { Map, List } from 'immutable';

//import reducers from './reducers';

import * as reducers from './reducers/index';
import { combineReducers } from 'redux-immutablejs';

const reducer = combineReducers(reducers);

export default createStore(reducer, reducer(Map({})));
