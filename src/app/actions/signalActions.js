export const ADD_SIGNAL = 'ADD_SIGNAL';
export function addSignal(signal){
  return {
    type: ADD_SIGNAL,
    signal
  };
}
