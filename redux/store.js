import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';
import placeReducer from './reducers/place';
import usersReducer from './reducers/users';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  places: placeReducer,
  users: usersReducer,
});

export default () => {
  console.log('redux init')
  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ['places'],
    blacklist: ['users'],
  };

  const middleware = compose(applyMiddleware(thunk));
  let store = createStore(persistReducer(persistConfig, rootReducer), {}, middleware)
  let persistor = persistStore(store);
  return { store, persistor };
}

