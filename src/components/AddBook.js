import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = () => {
    if (title !== '' && author !== '') {
      dispatch(addBook({
        title,
        author,
        category: 'Action',
        item_id: Date.now().toString(),
      }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
      <p>Add a new Book!</p>
      <input type="text" placeholder="Title..." name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Author..." name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="button" onClick={handleSubmit}>Add Book</button>
    </div>
  );
}

export default AddBook;
