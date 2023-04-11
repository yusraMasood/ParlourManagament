import 'react-native-gesture-handler'
import React, {useEffect} from 'react';
import store from './src/StateManagement/store';
import {StatusBar, View} from 'react-native';
import Navigation from './src/Navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import LoadingComponent from './src/components/LoadingComponent';
let persister = persistStore(store);

const App = props => {
  return (
    <Provider store={store}>
    <PersistGate persistor={persister}>
        <View style={{flex: 1}}>
          <StatusBar
            barStyle="light-content"
            translucent={true}
            backgroundColor="transparent"
          />
          <Navigation />
          <LoadingComponent />
        </View>
        </PersistGate>
    </Provider>
  );
};
export default App;
