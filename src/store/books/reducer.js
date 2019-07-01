import { constants } from './actions'

const initialState = {
  books: [],
  book: {},
  loading: false
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.BOOK_LOADING:
      return {
        ...state,
        loading: true
      };
    case constants.GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case constants.GET_BOOK:
      return {
        ...state,
        book: action.payload,
        loading: false
      };
    case constants.ADD_BOOK:
      return {
        ...state,
        books: [ ...state.posts, action.payload]
      };
    case constants.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(item => item._id !== action.payload)
      };
    case constants.UPDATE_BOOK:
        return {
            ...state,
            updateBook:action.payload.success
        }
    default:
      return state;
  }
}

export default booksReducer;