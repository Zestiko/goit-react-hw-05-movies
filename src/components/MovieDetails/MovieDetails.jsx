import axios from 'axios';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const [movieId, setMovieID] = useState(5);
  const [movies, setMovies] = useState({});

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
  const { title, release_date, overview, genres } = movies;

  console.log(title);
  console.log(release_date);
  return (
    <>
      <button type="button">Back</button>
      <div>
        <img
          src="https://image.tmdb.org/t/p/w500/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg"
          alt=""
          height="500"
        />
        <div>
          <h1>{title}:</h1>
          <p>User Score: </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p></p>
        </div>
      </div>
      <div>
        <ul>
          <li>Casts</li>
          <li>Reviews</li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
