import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceApi from '../../helpers/service-api';
import CastItem from 'components/CastItem/CastItem';
import css from './Cast.module.css';
import Loader from 'components/Loader/Loader';

const TheMovieApi = new ServiceApi();

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
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
      {actors.length > 0 && <CastItem actors={actors} />}
      {status === 'resolved' && actors.length === 0 && (
        <h3>List of actors not found🐒</h3>
      )}
      {status === 'rejected' && <h3>{error}</h3>}
    </>
  );
};

export default Cast;
