/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: '',
    author: '',
  });

  const getInputs = (e) => {
    const { name, value } = e.target;
    const inputs = { [name]: value };
    setInput({ ...input, ...inputs });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();
    const book = { id, ...input };
    dispatch(addBook(book));
    setInput(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          value={input.title}
          onChange={getInputs}
        />
        <input
          type="text"
          placeholder="Author..."
          name="author"
          value={input.author}
          onChange={getInputs}
        />
        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
