import { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [movieId, setMovieId] = useState(85);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const handleFetch = async id => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=30c2328b2ce92a2dec1b35516df54c65&language=en-US&page=1`
        );
        console.log(data.results);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch(movieId);
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
