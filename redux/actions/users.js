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

    global.storage.save({
      key: 'usersList', // Note: Do not use underscore("_") in key!
      data: list,

      // if expires not specified, the defaultExpires will be applied instead.
      // if set to null, then it will never expire.
      expires: 1000 * 3600
    });

    dispatch(userList(list));
  }
};
