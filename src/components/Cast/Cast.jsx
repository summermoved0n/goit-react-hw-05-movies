import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceApi from '../../helpers/service-api';
import CastItem from 'components/CastItem/CastItem';

const TheMovieApi = new ServiceApi();
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    TheMovieApi.getActorsById(movieId)
      .then(data => {
        const { cast } = data;
        setActors([...cast]);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [movieId]);

  console.log(actors);

  return (
    <>
      {status === 'pending' && <p>Loading...</p>}
      {actors.length > 0 && <CastItem actors={actors} />}
      {status === 'resolved' && actors.length === 0 && (
        <h3>List of actors not found🐒</h3>
      )}
      {status === 'rejected' && <h3>{error}</h3>}
    </>
  );
};

export default Cast;
