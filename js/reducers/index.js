/* @Flow */

import { combineReducers } from 'redux';

import Sample from './Sample';
import TimezoneTableFilter from './TimezoneTableFilter';
import TimezoneTick from './TimezoneTick';

export default combineReducers({
  Sample,
  TimezoneTableFilter,
  TimezoneTick,
});
