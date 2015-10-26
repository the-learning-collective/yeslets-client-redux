import { List } from 'immutable';
import { ADD_SIGNAL } from '../actions/signalActions';

export function signals(state = List(), action) {
  switch(action.type){
  case ADD_SIGNAL:
    return state.push(action.signal);
  default:
    return state;
  }
}
