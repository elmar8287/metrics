import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import DetailsDesc from './DetailsDesc';
import '../assets/css/style.css';

const Details = () => {
  const location = useLocation();
  const {
    countryName,
    casesConfirmed,
    deaths,
    allRecovered,
    casesOpen,
  } = location.state;

  return (
    <>
      <Navbar text={`${countryName} Covid Stats`} />
      <DetailsDesc
        name={countryName}
        confirmed={casesConfirmed}
        deaths={deaths}
        recovered={allRecovered}
        open={casesOpen}
      />
    </>
  );
};

export default Details;
