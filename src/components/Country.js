import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';

const Country = ({ name, confirmedCases }) => (
  <li className="country-data">
    <div className="right">
      <FaArrowCircleRight className="arrow" />
    </div>
    <div>
      <aside>
        <h2>{name}</h2>
        <span>Total Confirmed</span>
        <h3>{`${confirmedCases} cases`}</h3>
      </aside>
    </div>
  </li>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
};

export default Country;
