const axios = require('axios');

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  user: {
    type: 'guest',
    data : {}
  }
}

export function sessionReducer(state = initialState, action = {}) {
  switch(action.type) {
    case SET_USER_DATA:
      return { ...state, user: action.payload }
    default:
      return state;
  }
}

export const fetchUserData = () => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    if(!token) return dispatch({
      type: SET_USER_DATA,
      payload: { type: 'guest', data: {} }
    });
    const request = axios.get('http://localhost:3001/auth/me', {
      headers: {
        'token': token
      }
    });
    dispatch({
      type: SET_USER_DATA,
      payload: {
        type: 'user',
        data: request.data
      }
    });
  } catch (error) {
    console.error(error);
  }
}

export const logIn = data => dispatch => {
  //...
}