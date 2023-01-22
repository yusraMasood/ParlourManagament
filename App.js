import 'react-native-gesture-handler'
import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import Navigation from './src/Navigation';

const App = props => {
  return (
        <View style={{flex: 1}}>
          <StatusBar
            barStyle="light-content"
            translucent={true}
            backgroundColor="transparent"
          />
          <Navigation />
        </View>
  );
};
export default App;
