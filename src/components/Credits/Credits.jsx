import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Credits = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const handleFetch = async (id) => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=30c2328b2ce92a2dec1b35516df54c65&language=en-US`
        );
        console.log(data);
        setCasts(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch(movieId);
  }, [movieId]);
  return (
    <>
      <div>
        <ul>
          {casts.map(({ id, original_name, character, profile_path }) => {
            let imgLink = 'https://image.tmdb.org/t/p/w500' + profile_path;
            return (
              <li key={id}>
                <img src={imgLink} alt="character"  width="150"/>
                <h3>{original_name}</h3>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Credits;
