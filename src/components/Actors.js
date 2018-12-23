import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsList = actors.map((actor) => (
    <div>
    {actor.name}
      <ul>
        {actor.movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
