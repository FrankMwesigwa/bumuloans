import axios from 'axios';

export const constants = {
  ADD_BOOK: 'ADD_BOOK',
  GET_BOOK: 'GET_BOOK',
  GET_BOOKS: 'GET_BOOKS',
  UPDATE_BOOK: 'UPDATE_BOOK',
  DELETE_BOOK: 'DELETE_BOOK',
  CLEAR_BOOK: 'CLEAR_BOOK',
  CLEAR_UPDATE_BOOK: 'CLEAR_UPDATE_BOOK',
  GET_BOOK_W_REVIEWER: 'GET_BOOK_W_REVIEWER',
  CLEAR_BOOK_W_REVIEWER: 'CLEAR_BOOK_W_REVIEWER'
};

export const getBooks = (limit = 10, start = 0, order = 'asc') => dispatch => {
  const request = axios.get('/books').then(response => response.date);
  return { type: constants.GET_BOOKS, payload: request };
};

export const getBookWithReviewer = () => dispatch => {};

export const clearBookWithReviewer = () => {
  return {
    type: constants.CLEAR_BOOK_W_REVIEWER,
    payload: { book: {}, reviewer: {} }
  };
};

export const addBook = () => {
  const request = axios.post('/books').then(response => response.date);
  return { type: constants.ADD_BOOK, payload: request };
};

export const clearNewBook = () => {
  return { type: constants.CLEAR_BOOK, payload: {} };
};

export const clearUpdateBook = () => {
  return {
    type: constants.CLEAR_UPDATE_BOOK,
    payload: { book: {}, postDeleted: false, updateBook: false }
  };
};

export const getUserPosts = userId => {
  const request = axios.post(`/user/posts?user=${userId}`).then(response => response.date);
  return { type: constants.GET_USER_POSTS, payload: request };
};

export const getBookById = bookId => {
  const request = axios.get(`/user/book?book=${bookId}`).then(response => response.date);
  return { type: constants.GET_BOOK, payload: request };
};

export const updateBook = bookData => {
  const request = axios.post('/user/book', bookData).then(response => response.date);
  return { type: constants.UPDATE_BOOK, payload: request };
};

export const deleteBook = id => {
  const request = axios.delete(`/user/delete?id=${id}`).then(response => response.date);
  return { type: constants.DELETE_BOOK, payload: request };
};