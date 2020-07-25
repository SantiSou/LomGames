import { createThunk, createAction } from '@rootstrap/redux-tools';
import userService from 'services/userService';
import parseError from 'utils/parseError';

// export const login = createThunk('LOGIN', async user => {
export const login = createThunk('LOGIN', async () => {
  return {
    user: {
      email: 'agustin.prieto37@gmail.com',
      name: 'Agustin'
    },
    info: {
      token: 'token1234567',
      uid: 'agustin.prieto37@gmail.com',
      client: 'client1234567'
    }
  };
  /*
  try {
    const {
      data: { data }
    } = await userService.login({ user });
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
  */
});

export const logout = createThunk('LOGOUT', async () => {
  try {
    await userService.logout();
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const signUp = createThunk('SIGNUP', async user => {
  try {
    const { data } = await userService.signUp({ user });
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const updateSession = createAction('UPDATE_SESSION');
