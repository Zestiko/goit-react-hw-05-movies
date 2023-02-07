import axios from 'axios';
import { useParams, Link , Outlet} from 'react-router-dom';
import { useState, useEffect } from 'react';

const MOVIE_POSTER_LINK = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const {movieId} = useParams();
  console.log(movieId);

  const [movies, setMovies] = useState(null);

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

  const { title, release_date, overview, genres, poster_path, vote_average } =
    movies;

  console.log(title);
  console.log(release_date.slice(0, 4));
  // TODO fix bugs with dots
  const genresPars = genres.map(({ name, id }) => {
    const gens = `${name} `;
    return gens
  });
  return (
    <>
      <button type="button">Back</button>
      <div>
        <img src={MOVIE_POSTER_LINK + poster_path} alt="Poster" height="500" />
        <div>
          <h1>{title}:</h1>
          <p>User Score: {vote_average} </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genresPars}</p>
        </div>
      </div>
      <div>
        <ul>
          <Link to="casts" >Casts</Link>
          <Link to="reviews" >Reviews</Link>
        </ul>
        <Outlet/>
      </div>
    </>
  );
};

export default MovieDetails;
