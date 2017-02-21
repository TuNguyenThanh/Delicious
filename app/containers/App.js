import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Router from './Router';

const store = configureStore({});

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Router />
      </View>
    </Provider>
  );
};

export default App;
