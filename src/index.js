import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import Navigation from './Navigation';
import {persistor, store} from './state';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';

const App = props => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor="transparent"
        />
        <Navigation />
        <Toast />
      </PersistGate>
    </Provider>
  );
};
export default App;
