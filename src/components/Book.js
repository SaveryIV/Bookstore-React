import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFromApi } from '../redux/books/booksSlice';
import ProgressBar from './ProgressBar';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-card">
      <div key={book.id} className="book-info">
        <p className="book-category">{book.category}</p>
        <p className="book-title">{book.title}</p>
        <p className="book-author">{book.author}</p>
        <ul>
          <li>
            <button type="button" className="comment-btn">
              Comments
            </button>
          </li>
          <div className="level-one" />
          <li>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteBookFromApi(book.id));
              }}
              className="remove-btn"
            >
              Remove
            </button>
          </li>
          <div className="level-one" />
          <li>
            <button type="button" className="edit-btn">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="item-progress">
        <ProgressBar />
        <div className="task-progress">
          <p className="complete-task">
            {Math.floor(Math.random() * (99 - 0)) + 0}
            <span>%</span>
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="level-two" />
      <div className="levels">
        <p className="main-levels">CURRENT CHAPTER</p>
        <p className="main-task">Chapter 10</p>
        <button type="button" className="Update-progress">
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
