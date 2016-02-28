/* @Flow */

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Home from './Home';
import DevTools from '../utils/DevTools';

export const store = configureStore();

export default React.createClass({
  render() {
    return (
      <Provider store={store}>
        <div>
          <Home/>
          <DevTools/>
        </div>
      </Provider>
    );
  }
});
