import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function ShowBook() {
  const bookList = useSelector((state) => state.book.bookList);

  return (
    <>
      {bookList.map((book) => (
        <div key={book.item_id}>
          <Book title={book.title} author={book.author} item_id={book.item_id} />
        </div>
      ))}
    </>
  );
}

export default ShowBook;
