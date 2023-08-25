/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
