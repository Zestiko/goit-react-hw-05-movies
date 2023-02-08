import PropTypes from 'prop-types';
import axios from 'axios';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  NavLink,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import css from './MovieDetails.module.css';

const MOVIE_POSTER_LINK = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  

  useEffect(() => {
    const hendleFetch = async id => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=30c2328b2ce92a2dec1b35516df54c65&language=en-US`
        );
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    hendleFetch(movieId);
  }, [movieId]);

  if (movies === null) {
    return;
  }

  const { title, overview, genres, poster_path, vote_average } = movies;

  const genresPars = genres.map(({ name, id }) => {
    const gens = `${name} `;
    return gens;
  });

  const userScoreNormalized = (vote_average * 10).toFixed();
  return (
    <>
      <Link to={location.state?.from ?? '/movie'} className={css.back}>
        Back
      </Link>
      <div>
        <img src={MOVIE_POSTER_LINK + poster_path} alt="Poster" height="500" />
        <div>
          <h1>{title}:</h1>
          <p>User Score: {userScoreNormalized + '%'} </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genresPars}</p>
        </div>
      </div>
      <div>
        <ul className={css.list}>
          <NavLink
            to="casts"
            state={{ from: location.state?.from }}
            className={({ isActive }) =>
              isActive ? css.navLinkActive : css.navLink
            }
          >
            Casts
          </NavLink>
          <NavLink
            to="reviews"
            state={{ from: location.state?.from }}
            className={({ isActive }) =>
              isActive ? css.navLinkActive : css.navLink
            }
          >
            Reviews
          </NavLink>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      vote_average: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};
