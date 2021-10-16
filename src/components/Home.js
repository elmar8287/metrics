import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountriesFromApi } from '../redux/home';
import Data from './Data';
import Navbar from './Navbar';
import Country from './Country';
import WorldData from './WorldData';
import '../assets/css/style.css';

const Home = () => {
  const state = useSelector((state) => state.countriesReducer);
  const { oneCountry, totalConfirmed } = state;

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchCountriesFromApi());
  }, []);

  const onChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Navbar text="WorldData Covid-19 Stats" year="2021" />
      <WorldData totalConfirmed={totalConfirmed} />
      <section>
        <Data filter={filter} onChange={onChange} />
        <h3 className="stats-name">Stats By Country</h3>
        <ul className="container">
          {oneCountry && oneCountry
            .filter((location) => location.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
            .map((country) => {
              const {
                name,
                confirmedCases,
                id,
                allDeaths,
                allRegions,
                recovered,
                openCases,
              } = country;
              return (
                <Link
                  className="country-card"
                  key={id}
                  to={{
                    pathname: `/details/${name}`,
                    state: {
                      countryName: name,
                      countryId: id,
                      casesConfirmed: confirmedCases,
                      deaths: allDeaths,
                      regions: allRegions,
                      allRecovered: recovered,
                      casesOpen: openCases,
                    },
                  }}
                >
                  <Country name={name} confirmedCases={confirmedCases} />
                </Link>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default Home;
