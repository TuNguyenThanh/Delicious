import {
  EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOAD
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, error: '' };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, email: '', password: '', error: '', loading: false };
    case LOGIN_ERROR:
      return { ...state, error: action.payload, password: '', loading: false };
    case LOGIN_LOAD:
      return { ...state, loading: true };
    default:
      return state;
  }
};
