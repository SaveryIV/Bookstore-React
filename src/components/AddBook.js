import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(
        addBook({
          title,
          author,
          category: 'Action',
          item_id: Date.now().toString(),
        }),
      );
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
      <p>Add a new Book!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author..."
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
