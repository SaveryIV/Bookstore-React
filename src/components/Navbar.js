/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
