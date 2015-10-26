import { List } from 'immutable';
import { createReducer } from 'redux-immutablejs';
import { ADD_SIGNAL } from '../actions/signalActions';

const initState = List();

export const signals = createReducer(initState, {
  [ADD_SIGNAL]: (state, action) => state.push(action.payload)
});
