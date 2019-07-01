import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addBook } from '../../store/books/actions';

class BookAdd extends Component {
  static propTypes = {
    addBook: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
    state = {
      name: '',
      author: '',
      review: '',
      pages: '',
      rating: '',
      price: '' ,
      enteredBy:''
    };

    onChangeHandler = e => {
      this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler = e => {
    e.preventDefault();

    const { user } = this.props.auth;

    const newBook = {
      name: this.state.name,
      author: this.state.author,
      review: this.state.review,
      pages: this.state.pages,
      rating: this.state.rating,
      price: this.state.price,
      enteredBy: user.name,
    };

    this.props.addBook(newBook, this.props.history)
  }

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
  auth: state.auth
});

export default connect(mapStateToProps, { addBook })(withRouter(BookAdd));