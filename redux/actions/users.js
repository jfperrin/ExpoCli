import {list as fetchUsersList} from "../../services/users";

export const USERS_LIST = 'USERS_LIST';
export const userList = (users) => ({
  type: USERS_LIST,
  payload: {
    users,
  },
});

export function getUsersList() {
  return async (dispatch) => {
    const list = await fetchUsersList();
    dispatch(userList(list));
  }
};
