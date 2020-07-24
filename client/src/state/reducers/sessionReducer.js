import { createReducer } from '@rootstrap/redux-tools';
import { login, signUp, logout, updateSession } from 'state/actions/userActions';

const initialState = {
  authenticated: false,
  user: null,
  info: {}
};

const actionHandlers = {
  [login.success]: (state, { payload }) => {
    state.user = payload.user;
    state.info = payload.info;
    state.authenticated = true;
  },
  [signUp.success]: (state, { payload }) => {
    state.user = payload;
  },
  [updateSession]: (state, { payload }) => {
    state.info = payload;
    state.authenticated = true;
  },
  [logout.success]: () => initialState
};

export default createReducer(initialState, actionHandlers);
