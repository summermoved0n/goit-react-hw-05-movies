import { useEffect, useState } from 'react';
import ServiceApi from '../helpers/service-api';
import { Link } from 'react-router-dom';
import css from './styles.module.css';
import Loader from 'components/Loader/Loader';

const TheMovieApi = new ServiceApi();

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    setStatus('pending');
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
    <div>
      <b>Trending today</b>
      {status === 'pending' && (
        <div className={css.Loader}>
          <Loader />
        </div>
      )}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title ?? name}</Link>
            </li>
          ))}
        </ul>
      )}
      {status === 'resolved' && movies.length === 0 && (
        <h4>List of trends not found🐷</h4>
      )}
      {status === 'rejected' && <p>{error}</p>}
    </div>
  );
};

export default Home;
