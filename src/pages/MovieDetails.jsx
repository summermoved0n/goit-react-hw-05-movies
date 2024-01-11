import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ServiceApi from '../helpers/service-api';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';

const TheMovieApi = new ServiceApi();
const stateMachine = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESPONSE: 'resolved',
  REJACTED: 'rejected',
};

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(stateMachine.IDLE);
  const { movieId } = useParams();

  console.log(status);

  useEffect(() => {
    try {
      TheMovieApi.getMovieById(movieId).then(data => {
        const {
          id,
          title,
          poster_path,
          genres,
          overview,
          release_date,
          vote_average,
        } = data;
        setMovie({
          id,
          title,
          poster_path,
          genres,
          overview,
          release_date,
          vote_average,
        });
        setStatus(stateMachine.RESPONSE);
      });
    } catch (error) {
      setStatus(stateMachine.REJACTED);
    }
  }, [movieId]);

  console.log(movie);

  return (
    <div>
      {status === 'resolved' && <MovieDetailsItem movie={movie} />}
      {status === 'rejected' && <p>This movie not found🐷</p>}
    </div>
  );
};

export default MovieDetails;
