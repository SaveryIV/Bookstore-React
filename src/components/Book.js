import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ title, author, item_id: ïtemId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(ïtemId));
  };

  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default Book;
