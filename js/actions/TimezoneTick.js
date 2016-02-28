/* @Flow */

import {TICK} from '../constants/ActionTypes';

const MINUTE_MS = 60 * 1000;
let tickId;
let dispatch = () => {};

export function initDispatch(propsDispatch) {
  dispatch = propsDispatch;
}

function dispatchTick(time) {
  dispatch({
    type: TICK,
    time
  });
  setTick();
}

export function setTick() {
  const currentTime = Date.now();
  const currentMinute = currentTime - (currentTime % MINUTE_MS);
  const delta = (currentMinute + MINUTE_MS) - currentTime;
  tickId = setTimeout(() => dispatchTick(currentTime), delta);
}

export function unsetTick() {
  if (tickId) {
    clearTimeout(tickId);
  }
}

window.dispatchTick = dispatchTick
