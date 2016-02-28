/* @Flow */

import { combineReducers } from 'redux';

import TimezoneTableFilter from './TimezoneTableFilter';
import TimezoneTick from './TimezoneTick';

export default combineReducers({
  TimezoneTableFilter,
  TimezoneTick,
});
