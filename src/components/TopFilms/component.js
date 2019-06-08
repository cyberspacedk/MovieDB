import React from 'react';

// eslint-disable-next-line react/prop-types
const TopFilms = ({ loading, topFilms }) => {
  return (
    <div>
      <h2>Top Week chart </h2>
      <ul>
        {loading && <li>...Loading</li>}
        {topFilms.results !== undefined &&
          topFilms.results.map(film => <li key={film.id}>{film.title}</li>)}
      </ul>
    </div>
  );
};

export default TopFilms;
