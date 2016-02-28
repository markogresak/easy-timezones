/* @Flow */

import {TICK} from '../constants/ActionTypes';
import {store} from '../containers/App'

const TICK_PERIOD = 60 * 1000;
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
  const currentMinute = currentTime - (currentTime % TICK_PERIOD);
  const delta = (currentMinute + TICK_PERIOD) - currentTime;
  tickId = setTimeout(dispatchTick, delta);
}

export function unsetTick() {
  if (tickId) {
    clearTimeout(tickId);
  }
}
