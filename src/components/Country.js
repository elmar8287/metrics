import React from 'react';
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

export default Country;
