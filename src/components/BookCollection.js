import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooksData } from '../redux/books/booksSlice';

const BookCollection = () => {
  const {
    books, isLoading, error, isSuccessful,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch, isSuccessful]);

  if (isLoading) {
    return (
      <div>
        <p>Is Loading...</p>
      </div>
    );
  }
  if (error) return <h2>Something went wrong</h2>;
  if (books.length === 0) return <h2>No books available. Please come check later</h2>;
  return books.map((book) => (
    <div key={book.id}>
      <Book key={book.id} book={book} />
    </div>
  ));
};

export default BookCollection;
