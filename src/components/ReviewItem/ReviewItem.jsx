import css from './ReviewItem.module.css';

const ReviewItem = ({ reviews }) => {
  return (
    <ul className={css.review_list}>
      {reviews.map(({ author, content, id }) => (
        <li className={css.review_item} key={id}>
          <h3 className={css.review_title}>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default ReviewItem;
