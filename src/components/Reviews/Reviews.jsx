import { useEffect, useState } from 'react';
import ServiceApi from '../../helpers/service-api';
import { useParams } from 'react-router-dom';
import ReviewItem from 'components/ReviewItem/ReviewItem';
import css from './Reviews.module.css';
import Loader from 'components/Loader/Loader';

const TheMovieApi = new ServiceApi();

const Reviews = () => {
  const [status, setStatus] = useState('idle');
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    TheMovieApi.getReviewById(movieId)
      .then(data => {
        const { results } = data;
        setReviews([...results]);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      {status === 'pending' && (
        <div className={css.loader}>
          <Loader />
        </div>
      )}
      {reviews.length > 0 && <ReviewItem reviews={reviews} />}
      {status === 'resolved' && reviews.length === 0 && (
        <h3>This movie have not any review🐸</h3>
      )}
      {status === 'rejected' && <h3>{error}</h3>}
    </>
  );
};

export default Reviews;
