import axios from 'axios';
import setAuthToken from '../../app/auth/setAuthToken';

export const constants = {
  USER_LOADED: 'USER_LOADED',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
};

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  
    try {
      const response = await axios.get('/account/authenticated');
      dispatch({ type: constants.USER_LOADED, payload: response.data });
    } catch (error) {
      dispatch({ type: constants.LOGIN_FAILED });
    }
  };

  export const userLogin = logindata => async dispatch => {
    try {
      const res = await axios.post('/account/login', logindata);
      dispatch({ type: constants.LOGIN_SUCCESS, payload: res.data });
      dispatch(loadUser());
    } catch (err) {
      dispatch({ type: constants.LOGIN_FAILED, error: err.response.data.error });
    }
  };
  
  export const logoutUser = () => dispatch => {
    dispatch({ type: constants.LOGOUT_SUCCESS });
  };