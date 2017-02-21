import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOAD
} from './types';

export const changedEmail = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const changedPassword = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_LOAD });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: 'thanhtu'
    });
    Actions.Main({ type: 'reset' });
    // if (email === 'thanhtu' && password === '123') {
    //
    // } else {
    //   dispatch({
    //     type: LOGIN_ERROR,
    //     payload: 'loi sai tai khoan'
    //   });
    // }
  };
};
