// Actions for app
export const SET_USER = 'APP/SET_USER';

// Actions creators for app
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
