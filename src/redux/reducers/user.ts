import {
  LOGIN_USER_REQUESTED,
  LOGIN_USER_SUCCEED,
  LOGIN_USER_FAILED,
  LOGOUT_USER_REQUESTED,
  LOGOUT_USER_SUCCEED,
  LOGOUT_USER_FAILED,
  REGISTER_USER_SUCCEED,
  HIDE_MESSAGE,
  UPDATE_USER_REQUESTED,
  UPDATE_USER_SUCCEED,
  UPDATE_USER_FAILED,
  EDIT_USER_REQUESTED,
  EDIT_USER_SUCCEED,
  EDIT_USER_FAILED,
  UserState,
  FetchUserActions,
} from "../../types";

export default function user(
  state: UserState = {
    loading: false,
    user: "",
    status: "",
    message: "",
  },
  action: FetchUserActions
): UserState {
  switch (action.type) {
    case LOGIN_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCEED:
      const user = action.payload;
      return {
        loading: false,
        user: user.data,
        message: user.message,
        status: user.status,
      };
    case LOGIN_USER_FAILED:
      const loginError = action.payload;
      return {
        loading: false,
        user: "",
        message: loginError.message,
        status: loginError.status,
      };
    case LOGOUT_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_USER_SUCCEED:
      const logoutResponse = action.payload;
      return {
        loading: false,
        status: logoutResponse.status,
        message: logoutResponse.message,
        user: logoutResponse.user,
      };
    case LOGOUT_USER_FAILED:
      const logoutError = action.payload;
      return {
        ...state,
        loading: false,
        status: logoutError.status,
        message: logoutError.message,
      };
    case REGISTER_USER_SUCCEED:
      const feedback = action.payload;
      return {
        ...state,
        loading: false,
        message: feedback.message,
        status: feedback.status,
      };
    case UPDATE_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_SUCCEED:
      const updateResponse = action.payload;
      return {
        ...state,
        loading: false,
        user: updateResponse.user,
      };
    case UPDATE_USER_FAILED:
      const updateError = action.payload;
      return {
        ...state,
        status: updateError.status,
        message: updateError.message,
      };
    case EDIT_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case EDIT_USER_SUCCEED:
      const editResponse = action.payload;
      return {
        ...state,
        loading: false,
        user: editResponse.user,
        status: editResponse.status,
        message: editResponse.message
      };
    case EDIT_USER_FAILED:
      const editError = action.payload;
      return {
        ...state,
        status: editError.status,
        message: editError.message,
      };
    case HIDE_MESSAGE:
      return {
        ...state,
        loading: false,
        message: "",
        status: "",
      };
    default:
      return state;
  }
}
