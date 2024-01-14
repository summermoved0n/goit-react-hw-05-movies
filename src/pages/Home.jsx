import { useEffect, useState } from 'react';
import ServiceApi from '../helpers/service-api';
import css from './styles.module.css';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { useLocation } from 'react-router-dom';

const TheMovieApi = new ServiceApi();

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  const location = useLocation();

  useEffect(() => {
    TheMovieApi.getFetchPopularMovie()
      .then(data => {
        const { results } = data;
        setMovies([...results]);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, []);
  return (
    <>
      <h3 className={css.home_title}>Trending today:</h3>
      {movies.length > 0 && (
        <MoviesGallery movies={movies} location={location} />
      )}
      {status === 'resolved' && movies.length === 0 && (
        <h4>List of trends not found🐷</h4>
      )}
      {status === 'rejected' && <p>{error}</p>}
    </>
  );
};

export default Home;
