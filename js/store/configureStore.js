/* @Flow */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import DevTools from '../utils/devTools';

let configureStore;

if (__DEV__) {
  const enhancer = compose(
    applyMiddleware(thunk),
    DevTools().instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/
      )
    )
  );

  configureStore = function (initialState) {
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
      module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').default)
      );
    }

    return store;
  }
} else {
  const enhancer = applyMiddleware(thunk);

  configureStore = function (initialState) {
    return createStore(rootReducer, initialState, enhancer);
  }
}

export default configureStore;
