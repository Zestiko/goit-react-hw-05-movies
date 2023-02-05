import { useEffect, useState } from 'react';
import axios from 'axios';

const Credits = () => {
  const [movieId, setMovieId] = useState(5);
  const [Casts, setCasts] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const data = await axios.get(
          'https://api.themoviedb.org/3/movie/5/credits?api_key=30c2328b2ce92a2dec1b35516df54c65&language=en-US'
        );
        console.log(data);
        setCasts(data)
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (<>
  <h1>hello</h1>
  </>)
};
export default Credits;

