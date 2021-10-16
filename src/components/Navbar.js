import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/css/nav.css';
import { AiFillCaretLeft } from "react-icons/ai";

const Navbar = ({ text, year }) => (
  <section>
    <div className="top-menu">
      <Link to="/">
        <p><AiFillCaretLeft /></p>
      </Link>
      <h1>{year}</h1>
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
