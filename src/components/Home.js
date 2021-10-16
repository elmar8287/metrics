import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountriesFromApi } from '../redux/home';
import Data from './Data';
import Navbar from './Navbar';
import Country from './Country';
import WorldData from './WorldData';

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
      <Navbar text="World Covid-19 Stats" year="2021" />
      <WorldData totalConfirmed={totalConfirmed} />
      <section>
        <Data filter={filter} onChange={onChange} />
        <h3>Stats By Country</h3>
        <ul>
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
