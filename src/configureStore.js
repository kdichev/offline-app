import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      : undefined
  )
}
