/* @Flow */

import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// Only renders when running in DEBUG mode.
export default __DEV__ && createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'
               changeMonitorKey='ctrl-m'
               defaultIsVisible={true}
               defaultSize={.2}>
    <LogMonitor/>
  </DockMonitor>
);
