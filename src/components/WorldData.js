import React from 'react';
import PropTypes from 'prop-types';

const WorldData = ({ totalConfirmed }) => (
  <section>
    <div>
      <div>
      
      </div>
      <aside>
        <h2>World</h2>
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
