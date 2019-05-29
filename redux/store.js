import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import placeReducer from './reducers/place';
import usersReducer from './reducers/users';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  places: placeReducer,
  users: usersReducer,
});

const configureStore = () => {
  const middleware = compose(applyMiddleware(thunk));
  return createStore(rootReducer, {}, middleware);
};

export default configureStore;
