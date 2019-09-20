import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Provider as ReduxProvider } from 'react-redux';

import AppContainer from './screens';
import store from './redux';

class App extends Component {

  render() {
    return (
      <ReduxProvider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar
            translucent={false}
            barStyle="light-content"
          />
          <AppContainer />
        </View>
      </ReduxProvider>
    );
  }

};

export default App;
