// import * as signals from './signals';
// export default signals;

import { Map } from 'immutable';
import { signals } from './signals';

export default function reducers(state, action){
  return Map({
    signals: signals(state.get('signals'), action)
  });
}
