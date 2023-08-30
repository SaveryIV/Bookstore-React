import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookCollection = () => {
  const bookList = useSelector((state) => state.book.bookList);

  return (
    <>
      {bookList.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          item_id={book.item_id}
        />
      ))}
    </>
  );
};

export default BookCollection;
