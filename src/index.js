/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error);
  }
}

const store = generateStore();

const WithStrictMode = () => <React.StrictMode><App /></React.StrictMode>;
const WithStore = () => <Provider store={store}><WithStrictMode /></Provider>;

ReactDOM.render(<WithStore />, document.getElementById('root'));

store.subscribe(() => saveToLocalStorage(store.getState()));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
