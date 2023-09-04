import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooksData } from '../redux/books/booksSlice';
import Loader from './Ring';

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
        <Loader />
      </div>
    );
  }
  if (error) return <h2>Something went wrong</h2>;
  if (books.length === 0) return <h2>No books available. Please come check later</h2>;
  return books.map((book) => (
    <div key={book.id} className="card">
      <Book key={book.id} book={book} />
    </div>
  ));
};

export default BookCollection;
