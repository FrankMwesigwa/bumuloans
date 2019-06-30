import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook, clearNewBook } from '../../store/books/actions';

export class AddBook extends Component {
  static propTypes = {
    addBook: PropTypes.func.isRequired
  };

  state = {
    name: '',
    author: '',
    review: '',
    pages: '',
    rating: '',
    price: ''
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = async e => {
    e.preventDefault();
    this.props.dispatch(addBook({ ...this.state, ownerId: this.props.user.login.id }));
  };

  componentWillUnMount = () => {
    this.props.dispatch(clearNewBook());
  };

  render() {
    const { name, author, review, pages, rating, price } = this.state;
    return (
      <Fragment>
        <h1 className="large text-primary">Add Book</h1>
        <p className="lead">
          <i className="fas fa-user" /> New Book Add
        </p>
        <form className="form" onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <input
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Enter Author"
              name="author"
              value={author}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Enter Review"
              name="review"
              value={review}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input placeholder="Pages" name="pages" value={pages} onChange={this.onChangeHandler} />
          </div>
          <div className="form-group">
            <select name="rating" value={rating} onChange={this.onChangeHandler}>
              <option val="1">1</option>
              <option val="2">2</option>
              <option val="3">3</option>
              <option val="4">4</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Enter Price"
              name="price"
              value={price}
              onChange={this.onChangeHandler}
            />
          </div>

          <button type="submit" className="btn btn-primary">Add New Book</button>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  books: state.book
});

export default connect(mapStateToProps)(AddBook);