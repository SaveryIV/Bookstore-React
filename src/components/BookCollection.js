/* eslint-disable react/no-array-index-key */
import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

function BookCollection() {
  const books = [
    { title: 'A', author: 'Mr.A' },
    { title: 'B', author: 'Mr.B' },
    { title: 'C', author: 'Mr.C' },
  ];

  return (
    <>
      {books.map((book, index) => (
        <div key={index}>
          <Book title={book.title} author={book.author} />
        </div>
      ))}
      <AddBook />
    </>
  );
}

export default BookCollection;
