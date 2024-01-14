import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import ServiceApi from '../helpers/service-api';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import css from './styles.module.css';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const TheMovieApi = new ServiceApi();

const Movies = () => {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('query');

  useEffect(() => {
    if (movieId === null) {
      return;
    }
    setStatus('pending');
    TheMovieApi.getMovieByQuery(movieId)
      .then(data => {
        const { results } = data;
        setMovies([...results]);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [movieId]);

  const onSubmit = query => {
    query ? setSearchParams({ query }) : setSearchParams({});
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {status === 'pending' && (
        <div className={css.Loader}>
          <Loader />
        </div>
      )}
      {movies.length > 0 && <MoviesGallery movies={movies} />}
      {status === 'resolved' && movies.length === 0 && (
        <p>
          Sorry <b>"{movieId}"</b> not found
        </p>
      )}
      {status === 'rejected' && <p>{error}</p>}
    </>
  );
};

export default Movies;
