/* @Flow */

import * as ActionTypes from '../constants/ActionTypes';

const defaultState = {
  time: Date.now()
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.TICK:
      return {...state, time: action.time};
    default:
      return state;
  }
}
