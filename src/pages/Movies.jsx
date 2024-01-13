import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import ServiceApi from '../helpers/service-api';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import css from './styles.module.css';
import Loader from 'components/Loader/Loader';

const TheMovieApi = new ServiceApi();

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setStatus('pending');
    TheMovieApi.getMovieByQuery(searchQuery)
      .then(data => {
        const { results } = data;
        setMovies([...results]);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [searchQuery]);

  const onSubmit = query => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      {status === 'pending' && (
        <div className={css.Loader}>
          <Loader />
        </div>
      )}
      {movies.length > 0 && <MoviesGallery movies={movies} />}
      {status === 'resolved' && movies.length === 0 && (
        <p>
          Sorry <b>"{searchQuery}"</b> not found
        </p>
      )}
      {status === 'rejected' && <p>{error}</p>}
    </div>
  );
};

export default Movies;
