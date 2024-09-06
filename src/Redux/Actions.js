// src/redux/actions.js
import axios from 'axios';

// Action Types
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

// Action Creators
export const register = (username, email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/register', { username, email, password });
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data.message
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message
    });
  }
};
