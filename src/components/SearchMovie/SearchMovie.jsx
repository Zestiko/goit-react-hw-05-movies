import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
const API_KEY = '30c2328b2ce92a2dec1b35516df54c65';

const SearchMovie = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSerchParams] = useSearchParams();

  const location = useLocation();
  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const handleFetch = async value => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
        );

        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch(movieName);
  }, [movieName]);

  const handelChange = e => {
    const { value } = e.target;
    setQuery(value);
  };
  const handelSubmit = e => {
    e.preventDefault();
    setSerchParams({ query });
    setQuery('');
  };
  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          onChange={handelChange}
          type="text"
          placeholder="Search movie"
          name="query"
          value={query}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SearchMovie;

SearchMovie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};