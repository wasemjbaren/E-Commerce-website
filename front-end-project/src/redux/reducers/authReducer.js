import {
  CREATE_NEW_USER,
  LOGIN_USER,
  GET_CURRENT_USER,
  FORGET_PASSWORD,
  VERIFY_PASSWORD,
  RESET_PASSWORD,
} from '../type';

const inital = {
  createUser: [],
  loginUser: [],
  currentUser: [],
  forgetPassword: [],
  verifyPassword: [],
  resetPassword: [],
  loading: true,
};
const authReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        createUser: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
      };

    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case FORGET_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
      };

    case VERIFY_PASSWORD:
      return {
        ...state,
        verifyPassword: action.payload,
      };

    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
