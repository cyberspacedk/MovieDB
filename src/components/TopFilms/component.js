import React from 'react';

// eslint-disable-next-line react/prop-types
const TopFilms = ({ loading, topFilms }) => {
  return (
    <ul>
      {loading && <li>...Loading</li>}
      {topFilms.results !== undefined &&
        topFilms.results.map(film => <li key={film.id}>{film.title}</li>)}
    </ul>
  );
};

export default TopFilms;
