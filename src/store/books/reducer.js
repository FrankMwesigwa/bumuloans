import { constants } from './actions';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.GET_BOOKS:
      return { ...state, list: action.payload };
    case constants.GET_BOOK:
      return { ...state, book: action.payload };
    case constants.GET_BOOK_W_REVIEWER:
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer
      };
    case constants.CLEAR_BOOK_W_REVIEWER:
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer
      };
    case constants.ADD_BOOK:
    case constants.CLEAR_BOOK:
      return { ...state, newBook: action.payload };
    case constants.CLEAR_UPDATE_BOOK:
      return {
        ...state,
        updateBook: action.payload.updateBook,
        book: action.payload.book,
        postDeleted: action.payload.postDeleted
      };
    case constants.UPDATE_BOOK:
      return { ...state, updateBook: action.payload.success, book: action.payload.doc };
    case constants.DELETE_BOOK:
      return { ...state, postDeleted: action.payload };
    case constants.GET_USER_POSTS:
      return { ...state, userPosts: action.payload };
    default:
      return state;
  }
};

export default booksReducer;