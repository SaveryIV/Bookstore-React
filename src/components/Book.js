/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ title, author, item_id }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(item_id));
  };

  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <button type="button" onClick={handleRemove}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default Book;
