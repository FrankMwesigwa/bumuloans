import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter} from 'react-router-dom';
import { deleteBook, getBook } from '../../store/books/actions';

class BookDetails extends Component {

  static propTypes = {
    deleteBook: PropTypes.func.isRequired,
    getBook: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
  };

  componentDidMount() {                                                         
    this.props.getBook(this.props.match.params.id);
  }

  render() {
    const { book, loading } = this.props.book;

    if (book === null || loading) {
      return <div>Loading....</div>;
    } 

    return (
        <div className="row">
          <div className="col-md-2">
            <p className="text-center">{book.author}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{book.name}</p>
            <p className="lead">{book.author}</p>
            <p className="lead">{book.rating}</p>
            <p className="lead">{book.price}</p>
            <p className="lead">{book.review}</p>
            <p className="lead">{book.pages}</p>
          </div>
          <div className="btn-group">
          <Link to={`/books/edit/${book._id}`} className='btn btn-info'>
            Edit
          </Link>
          <button className="btn btn-danger" type="button" onClick={() => this.props.deleteBook(book._id,this.props.history)}>   
            Delete
          </button>
          <Link to="/" className="btn btn-secondary">Close</Link>                                          
        </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({ book: state.book });

export default connect(mapStateToProps, { deleteBook, getBook })(withRouter(BookDetails));