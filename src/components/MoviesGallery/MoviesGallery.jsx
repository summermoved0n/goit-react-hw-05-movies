import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import css from './MoviesGallery.module.css';

const ListLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const MoviesGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.gallery_list}>
      {movies.map(({ id, title }) => (
        <li className={css.gallery_item} key={id}>
          <ListLink to={`${id}`} state={{ from: location }}>
            {title}
          </ListLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesGallery;
