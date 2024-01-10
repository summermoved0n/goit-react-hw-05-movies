import { useEffect, useState } from 'react';
import ServiceApi from '../helpers/service-api';
import { Link } from 'react-router-dom';

const TheMovieApi = new ServiceApi();

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    TheMovieApi.getFetchPopularMovie().then(data => {
      const { results } = data;
      setMovies([...results]);
    });
  }, []);
  return (
    <div>
      <b>Trending today</b>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title ?? name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
