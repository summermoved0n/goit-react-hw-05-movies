import { useEffect, useState } from 'react';
import ServiceApi from '../../helpers/service-api';
import { useParams } from 'react-router-dom';

const TheMovieApi = new ServiceApi();

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    TheMovieApi.getReviewById(movieId).then(data => {
      const { results } = data;
      setReviews([...results]);
    });
  }, [movieId]);

  console.log(reviews);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <li>Reviews not found</li>
      )}
    </ul>
  );
};

export default Reviews;
