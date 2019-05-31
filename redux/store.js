import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import placeReducer from './reducers/place';
import usersReducer from './reducers/users';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
  places: placeReducer,
  users: usersReducer,
});

export default () => {
  const middleware = compose(applyMiddleware(thunk));
  let store = createStore(persistReducer({
    key: 'root',
    storage,
  }, rootReducer), {}, middleware)
  let persistor = persistStore(store);
  return { store, persistor };
}