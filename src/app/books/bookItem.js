import React from 'react';
import { Link } from 'react-router-dom';

const bookItem = item => {
  return (
    <Link to={`/books/${item._id}`} className="book-item">
      <div className="book-header">
        <h2>{item.name}</h2>
      </div>
      <div className="book-items">
        <h2>{item.author}</h2>
        <strong>price</strong> ${item.price}
        <strong>pages</strong> ${item.pages}
      </div>
    </Link>
  );
};

export default bookItem;