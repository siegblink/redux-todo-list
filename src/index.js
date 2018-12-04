import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// add Provider from react-redux library
import { Provider } from 'react-redux';
// add createStore from redux library
import { createStore } from 'redux';
// add reducers from reducers folder
import reducers from './reducers';

//create store using createStore
const store = createStore(reducers);

//wrap App component with Provider
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
