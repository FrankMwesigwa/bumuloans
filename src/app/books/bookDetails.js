import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBookWithReviewer, clearBookWithReviewer } from '../../store/books/actions';

export class BooksDetails extends Component {
  static propTypes = {
    getBooksWithReviewer: PropTypes.func.isRequired
  };

  ComponentDidMount = () => {
    this.props.dispatch(getBookWithReviewer(this.props.match.params.id));
  };

  ComponentWillUnMount = () => {
    this.props.dispatch(clearBookWithReviewer());
  };

  renderBook = books =>
    books.book ? (
      <div className="container">
        <div className="header">
          <h2>{books.book.name}</h2>
          <h2>{books.book.author}</h2>
          <div>
            Reviewed by: {books.reviewer.lastname} {books.reviewer.firstname}
          </div>
        </div>
      </div>
    ) : null;

  render() {
    console.log(this.props);
    const { books } = this.props.books;
    return (
      <div>
        <h1>Current BookDetails in our Database</h1>
        <div>{this.renderBook(books)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.book
});

export default connect(mapStateToProps)(BooksDetails);