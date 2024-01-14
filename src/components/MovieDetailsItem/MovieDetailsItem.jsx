import { useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import css from './MovieDetailsItem.module.css';

const GoBackLink = styled(Link)`
  text-decoration: none;
  padding: 5px 20px;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10px;
  font-size: 18px;
`;

const AdditionalLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.06em;
  &.active {
    border: 1px solid #fff;
    border-bottom: none;
    padding: 0 15px;
    color: orange;
  }
`;

const MovieDetailsItem = ({ movie }) => {
  const location = useLocation();
  const refLocation = useRef(location.state?.from ?? '/movies');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const {
    id,
    title,
    poster_path,
    genres,
    overview,
    release_date,
    vote_average,
  } = movie;

  const year = new Date(release_date).getFullYear();
  const score = Math.round(vote_average * 10) + '%';

  return (
    <>
      <div key={id} className={css.conteiner}>
        <GoBackLink to={refLocation.current}>Go back</GoBackLink>
        <div className={css.wrap_conteiner}>
          <div>
            <img
              className={css.image}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              alt="poster"
              width={250}
            />
          </div>
          <div className={css.content_conteiner}>
            <h1 className={css.content_title}>
              {title}
              {!isNaN(year) && <span className={css.title_year}>({year})</span>}
            </h1>
            <p className={css.content_text}>
              <span className={css.content_subtitles}>User score: </span>
              {score}
            </p>
            <p className={css.content_text}>
              <span className={css.content_subtitles}>Owerviev:</span>
            </p>
            <p className={css.content_text}>{overview}</p>
            {genres.length > 0 && (
              <div className={css.ganres_wraper}>
                <div>
                  <span className={css.content_subtitles}>Genres: </span>
                </div>
                <div>
                  {genres.map(({ id, name }) => (
                    <span className={css.content_text} key={id}>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={css.bottom_conteiner}>
        <p className={css.bottom_title}>Additional information:</p>
        <ul className={css.bottom_list}>
          <li>
            <AdditionalLink to="cast">Cast</AdditionalLink>
          </li>
          <li>
            <AdditionalLink to="reviews">Reviews</AdditionalLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetailsItem;
