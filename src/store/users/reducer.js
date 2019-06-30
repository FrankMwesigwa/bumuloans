import { constants } from './actions';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.GET_BOOKS:
      return { ...state, list: action.payload };
    case constants.GET_BOOK:
      return { ...state, book: action.payload };
    default:
      return state;
  }
};

export default usersReducer;