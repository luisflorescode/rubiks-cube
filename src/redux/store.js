import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import cubeReducer from './cubeDuck';

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
}

const rootReducer = combineReducers({
  cube: cubeReducer,
});

const persistedState = loadFromLocalStorage();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function generateStore() {
  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
}

export default generateStore;
