import React, {useState} from 'react';
import {Provider} from 'react-redux';
import store from './src/scripts/state';
import AppNavigator from './src/scripts/AppNavigator';

const App = props => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
