import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from './SearchPanel';
import TrendingMovies from './TrendingMovies';
import Movies from './Movies';

const PageContent = ({ searchResponse }) => {
  return (
    <>
      <SearchPanel />
      {searchResponse ? <Movies /> : <TrendingMovies />}
    </>
  );
};

PageContent.propTypes = {
  searchResponse: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PageContent;
