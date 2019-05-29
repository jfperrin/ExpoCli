import {USERS_LIST} from '../actions/users';

const initialState = {
  items: []
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST:
      return {
        ...state,
        items: action.payload.users,
      };
    default:
      return state;
  }
};

export default placeReducer;
