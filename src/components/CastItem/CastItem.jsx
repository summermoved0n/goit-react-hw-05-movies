import css from './CastItem.module.css';

const CastItem = ({ actors }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ul className={css.cast_list}>
      {actors.map(({ character, id, name, profile_path }) => (
        <li className={css.cast_item} key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            alt="actor"
            width={200}
          />
          <h3 className={css.cast_title}>{name}</h3>
          <p className={css.cast_subtitle}>
            <span>Character: </span>
            {character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CastItem;
