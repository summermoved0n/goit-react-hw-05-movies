import { Link } from 'react-router-dom';

const MoviesGallery = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesGallery;
