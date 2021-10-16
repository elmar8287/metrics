import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/style.css';

const WorldData = ({ totalConfirmed }) => (
  <section>
    <div className="main-info">
      <aside className="world-info">
        <h2>Worldwild Info</h2>
        <span>{`${totalConfirmed} cases`}</span>
      </aside>
    </div>
  </section>
);

WorldData.propTypes = {
  totalConfirmed: PropTypes.number,
};

WorldData.defaultProps = {
  totalConfirmed: 0,
};

export default WorldData;
