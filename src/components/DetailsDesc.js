import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/style.css';

const DetailsDesc = ({
  confirmed,
  deaths,
  recovered,
  open,
}) => (
  <>
    <div>
      <aside>
        <div className="detail-info">
          <div>
            <span className="total-number">Total Confirmed </span>
            <h3>{`${confirmed} cases`}</h3>
          </div>
          <div>
            <span className="total-number">Total Deaths</span>
            <h3>{`${deaths} cases`}</h3>
          </div>
          <div>
            <span className="total-number">Total Recovered</span>
            <h3>{`${recovered} cases`}</h3>
          </div>
          <div>
            <span className="total-number">Total Open</span>
            <h3>{`${open} cases`}</h3>
          </div>
        </div>
      </aside>
    </div>

  </>
);

DetailsDesc.propTypes = {
  confirmed: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
};

export default DetailsDesc;
