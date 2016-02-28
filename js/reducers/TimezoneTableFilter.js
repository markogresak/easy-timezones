/* @Flow */

import * as ActionTypes from '../constants/ActionTypes';

const defaultState = {
  filter: ''
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.FILTER_CHANGED:
      return {...state, filter: action.filter};
    default:
      return state;
  }
}
