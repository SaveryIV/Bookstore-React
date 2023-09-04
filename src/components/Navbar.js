/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <header>
    <div className="title">
      <div className="container-title">
        <h1 className="store">Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
      <div className="container-circle">
        <div className="circle">
          <FontAwesomeIcon icon={faUser} style={{ color: '#0290ff' }} />
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
