import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import FirstScreen from './screens/FirstScreen';
import ComponentsShowcase from './screens/ComponentsShowcase';

class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent={false}
          backgroundColor="green"
          barStyle="light-content"
        />
        {/* <FirstScreen />  */}
        <ComponentsShowcase />
      </View>
    );
  }

};

export default App;
