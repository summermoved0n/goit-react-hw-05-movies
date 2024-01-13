import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ServiceApi from '../helpers/service-api';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';
import Loader from 'components/Loader/Loader';
import css from './styles.module.css';

const TheMovieApi = new ServiceApi();

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const { movieId } = useParams();

  console.log(status);

  useEffect(() => {
    setStatus('pending');
    TheMovieApi.getMovieById(movieId)
      .then(data => {
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
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [movieId]);

  console.log(movie);

  return (
    <div>
      {status === 'pending' && (
        <div className={css.Loader}>
          <Loader />
        </div>
      )}
      {status === 'resolved' && <MovieDetailsItem movie={movie} />}
      {status === 'rejected' && <p>{error}</p>}
      <Outlet />
    </div>
  );
};

export default MovieDetails;
