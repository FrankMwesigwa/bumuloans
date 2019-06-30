import axios from 'axios';

export const constants = {
  USER_LOGIN: 'USER_LOGIN',
  USER_AUTHENTICATED: 'USER_AUTHENTICATED',
  GET_USER_POSTS: 'GET_USER_POSTS'
};

export const loginUser = ({ email, password }) => dispatch => {
    const request = axios.post('/auth/login', { email, password }).then(response => response.date);
    return { type: constants.USER_LOGIN, payload: request };
  };
  
  export const authenticated = () => {
    const request = axios.get('/auth').then(response => response.date);
    return { type: constants.USER_AUTHENTICATED, payload: request };
  };