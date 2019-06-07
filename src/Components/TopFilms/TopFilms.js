import React from 'react';

// eslint-disable-next-line react/prop-types
const TopFilms = ({ topFilms }) => {
  console.log(topFilms);
  const chart = 'cxcx';

  // topFilms.results.map(film => (
  //  <li key={film.id}>
  //    <h2>{film.title}</h2>
  //    <p>{film.overview}</p>
  //  </li>
  // ));

  return <ul>{chart}</ul>;
};

export default TopFilms;
