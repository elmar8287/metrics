import React from 'react';
import PropTypes from 'prop-types';

const Country = ({ name, confirmedCases }) => (
  <li>
    <div>
      <p>icon</p>
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
