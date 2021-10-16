import React from 'react';
import PropTypes from 'prop-types';

const Data = ({ filter, onChange }) => (
  <div>
    <input
      type="text"
      value={filter}
      onChange={onChange}
      placeholder="Search Country"
    />
  </div>
);

Data.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Data;
