import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import FirstScreen from './screens/FirstScreen';
import ComponentsShowcaseScreen from './screens/ComponentsShowcaseScreen';
import PostsScreen from './screens/PostsScreen';
import PaperScreen from './screens/PaperScreen';

class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent={false}
          // backgroundColor="green"
          barStyle="light-content"
        />
        {/* <FirstScreen />  */}
        {/* <ComponentsShowcaseScreen /> */}
        {/* <PostsScreen /> */}
        <PaperScreen />
      </View>
    );
  }

};

export default App;
