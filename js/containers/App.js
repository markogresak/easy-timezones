/* @Flow */

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Home from './Home';
import renderDevTools from '../utils/devTools';

export const store = configureStore();

export default React.createClass({
  render() {
    return (
      <Provider store={store}>
        <div>
          <Home />

          {/*only renders when running in DEV mode*/}
          {renderDevTools(store)}
        </div>
      </Provider>
    );
  }
});
