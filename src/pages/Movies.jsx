import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import ServiceApi from '../helpers/service-api';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';

const TheMovieApi = new ServiceApi();

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    TheMovieApi.getMovieByQuery(searchQuery).then(data => {
      const { results } = data;
      setMovies([...results]);
    });
    setSearchQuery('');
  }, [searchQuery]);

  const onSubmit = query => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      <MoviesGallery movies={movies} />
    </div>
  );
};

export default Movies;
