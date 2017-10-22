import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './services/serviceWorker/registerServiceWorker';
import { loadState, saveState } from './services/localStorage/localStorage'
import { Provider } from 'react-redux';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './configureStore'

const persistedState = loadState();

const store = configureStore(persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    {/* <Router>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </Router> */}
      <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
