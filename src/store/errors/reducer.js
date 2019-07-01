import { constants } from '../actions/types';

const initialState = {};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_ERRORS:
      return action.payload;
    case constants.CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}

export default errorsReducer