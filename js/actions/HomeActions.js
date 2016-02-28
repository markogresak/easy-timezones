/* @Flow */

import {FILTER_CHANGED} from '../constants/ActionTypes';

export function changeFilter(filter) {
  return {
    type: FILTER_CHANGED,
    filter
  }
}
