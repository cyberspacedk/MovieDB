/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { singleFilmRequest } from '../../store/singleFilm/actions';
import AboutFilm from './component';
import {
  isError,
  isLoading,
  getImages,
  getCasts,
  getCrew,
  getGenres,
  getFilmInfo,
} from '../../store/singleFilm/selectors';

const Movie = props => {
  useEffect(() => {
    const { id } = props.match.params;
    props.singleFilmRequest(id);
  }, []);

  return <AboutFilm {...props} />;
};

const mstp = state => ({
  isError: isError(state),
  isLoading: isLoading(state),
  aboutFilm: getFilmInfo(state),
  images: getImages(state),
  casts: getCasts(state),
  crew: getCrew(state),
  genres: getGenres(state),
});
const mdtp = {
  singleFilmRequest,
};
export default connect(
  mstp,
  mdtp,
)(Movie);
