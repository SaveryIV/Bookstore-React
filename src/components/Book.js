import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFromApi } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div key={book.id}>
        <p>{book.category}</p>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <ul>
          <li>
            <button type="button">
              Comments
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteBookFromApi(book.id));
              }}
            >
              Remove
            </button>
          </li>
          <li>
            <button type="button">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 10</p>
        <button type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
