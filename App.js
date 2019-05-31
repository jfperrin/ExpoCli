import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from './components/Main'

const {store, persistor} = configureStore();

console.log(store, persistor);

const AppContainer = createAppContainer(createSwitchNavigator({Main: Main}));

class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
