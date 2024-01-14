import { useEffect, useState } from 'react';
import ServiceApi from '../helpers/service-api';
import { Link, useLocation } from 'react-router-dom';
import css from './styles.module.css';
import styled from 'styled-components';

const ListLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

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
        <ul className={css.home_list}>
          {movies.map(({ id, title, name }) => (
            <li className={css.home_item} key={id}>
              <ListLink to={`movies/${id}`} state={{ from: location }}>
                {title ?? name}
              </ListLink>
            </li>
          ))}
        </ul>
      )}
      {status === 'resolved' && movies.length === 0 && (
        <h4>List of trends not found🐷</h4>
      )}
      {status === 'rejected' && <p>{error}</p>}
    </>
  );
};

export default Home;
