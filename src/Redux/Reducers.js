// src/redux/reducers.js
import { REGISTER_SUCCESS, REGISTER_FAIL } from './Actions';

const initialState = {
  message: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        error: null
      };
    case REGISTER_FAIL:
      return {
        ...state,
        message: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
