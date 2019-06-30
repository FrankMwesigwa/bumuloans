import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBooks } from '../../store/books/actions';
import BookItem from './bookItem';

export class BooksList extends Component {
  static propTypes = {
    getBooks: PropTypes.func.isRequired
  };

  ComponentDidMount = () => {
    this.props.dispatch(getBooks(3, 0, 'desc'));
  };

  renderItems = books =>
    books.list ? books.list.map(item => <BookItem {...item} key={item._id} />) : null;

  render() {
    return (
      <div>
        <h1>Current Books in our Database</h1>
        <div>{this.renderItems(this.props.books)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.book
});

export default connect(mapStateToProps)(BooksList);