import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from './SearchPanel';
import TrendingMovies from './TrendingMovies';
import Movies from './Movies';

export const PageContent = ({ searchResponse }) => {
  return (
    <>
      <SearchPanel />
      {searchResponse ? <Movies /> : <TrendingMovies />}
    </>
  );
};

PageContent.propTypes = {
  searchResponse: PropTypes.number.isRequired,
};

export default PageContent;
