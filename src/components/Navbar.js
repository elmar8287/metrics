import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ text, year }) => (
  <section>
    <div>
      <Link to="/">
        <p>Home page</p>
      </Link>
      <h1>{year}</h1>
    </div>
    <div>
      <h2>{text}</h2>
    </div>
    <div>
      <p>something</p>
    </div>
  </section>
);

Navbar.propTypes = {
  text: PropTypes.string.isRequired,
  year: PropTypes.string,
};

Navbar.defaultProps = {
  year: '',
};

export default Navbar;
