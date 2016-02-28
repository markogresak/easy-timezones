/* @Flow */

import {TICK} from '../constants/ActionTypes';
import {store} from '../containers/App'

const MINUTE_MS = 60 * 1000;
let tickId;

function dispatchTick(time = Date.now()) {
  store.dispatch({
    type: TICK,
    time
  });
  setTick();
}

export function setTick() {
  const currentTime = Date.now();
  const currentMinute = currentTime - (currentTime % MINUTE_MS);
  const delta = (currentMinute + MINUTE_MS) - currentTime;
  tickId = setTimeout(dispatchTick, delta);
}

export function unsetTick() {
  if (tickId) {
    clearTimeout(tickId);
  }
}
