import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Toggle from './components/Toggle';

import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Toggle />
      </Provider>
    );
  }
}

export default App;
