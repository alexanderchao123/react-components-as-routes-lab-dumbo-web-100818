import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let moviesList = movies.map((movie) => (
    <div>
      {movie.title}
      {movie.time}
      <ul>
        {movie.genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
};

export default Movies;
