import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ServiceApi from '../helpers/service-api';

const TheMovieApi = new ServiceApi();

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    TheMovieApi.getMovieById(movieId).then(data => {
      setMovie([data]);
    });
  }, [movieId]);

  console.log(movie);

  return (
    <>
      {movie.map(({ id, title, poster_path, genres, overview }) => (
        <div key={id}>
          <h1>{title}</h1>
          <img src={poster_path} alt="" width="200" />
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
      ))}
      <hr />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
