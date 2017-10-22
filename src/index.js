import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './localStorage'
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/reducer';

const appStore = combineReducers({
  reducer
});

const persistedState = loadState();

let store = createStore(
  appStore,
  persistedState,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
