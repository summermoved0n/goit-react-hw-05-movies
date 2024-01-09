import { Route, Routes } from 'react-router-dom';

import { Loyaot } from './Loyaot/Loyaot';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Loyaot />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<p>Cast</p>} />
          <Route path="reviews" element={<p>Reviews</p>} />
        </Route>
      </Route>
    </Routes>
  );
};
