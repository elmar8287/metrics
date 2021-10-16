import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/style.css';

const Data = ({ filter, onChange }) => (
  <div>
    <input
      type="text"
      value={filter}
      onChange={onChange}
      placeholder="...search country"
      className="search"
    />
  </div>
);

Data.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Data;
