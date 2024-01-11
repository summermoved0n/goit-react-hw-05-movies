import { Link } from 'react-router-dom';

const MovieDetailsItem = ({ movie }) => {
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
      <div key={id}>
        <h1>
          {title} ({year})
        </h1>
        <p>User score: {score}</p>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt="poster"
          width={250}
        />
        <h2>Owerviev</h2>
        <p>{overview}</p>
        {genres.length > 0 && (
          <>
            <h2>Genres</h2>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <hr />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default MovieDetailsItem;
