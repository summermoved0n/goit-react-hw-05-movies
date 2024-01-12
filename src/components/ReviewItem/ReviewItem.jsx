const ReviewItem = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default ReviewItem;
