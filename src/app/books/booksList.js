import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getBooks } from '../../store/books/actions';

class BooksList extends Component {

  static propTypes = {
    getBooks: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { books, loading } = this.props.book;

    if (books === null || loading) {
      return <div>Loading....</div>;
    } 
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            {books.map(book => (
              <div key={ book._id }>
                <hr/>          
                <h4><Link to={`/books/${book._id}`}><span>Book Title</span>: {book.name}</Link></h4>
                <p className="lead">{book.rating}</p>
                <p className="lead">{book.price}</p>
                <p className="lead">{book.review}</p>
                <p className="lead">{book.pages}</p>
              </div>
            )
          )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book
});

export default connect(mapStateToProps, { getBooks })(BooksList);