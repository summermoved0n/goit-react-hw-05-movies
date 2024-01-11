import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceApi from '/Program/GitLib/goit-react-hw-05-movies/src/helpers/service-api';

const TheMovieApi = new ServiceApi();
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    TheMovieApi.getActorsById(movieId).then(data => {
      const { cast } = data;
      setActors([...cast]);
    });
  }, [movieId]);

  console.log(actors);

  return (
    <ul>
      {actors.map(({ character, id, name, profile_path }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            alt="actor"
            width={200}
          />
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
