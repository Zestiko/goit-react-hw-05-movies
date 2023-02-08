import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
// import css from './Trending.module.css'
import PropTypes from 'prop-types';

const BASE_URL =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=30c2328b2ce92a2dec1b35516df54c65';

const Trending = () => {
  const [trendingMoovies, setTrendingMoovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const {data} = await axios.get(BASE_URL);
        setTrendingMoovies(data.results)
      } catch (error) {
        console.log(error)
      }
    };
    handleFetch();
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMoovies.map(({id, title}) => {
          return (
            <li key={id}>
              <Link to={`movie/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      ;
    </>
  );
 
};

export default Trending;

Trending.propTypes = {
  trendingMoovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};