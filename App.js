import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from './components/Main'

const store = configureStore();

const AppContainer = createAppContainer(createSwitchNavigator({  Main: Main}));

class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;