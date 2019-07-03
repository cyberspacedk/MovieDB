/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class Movie extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.singleFilmRequest(id);
  }

  render() {
    const { images } = this.props;
    const posters = (images && images.slice(0, 3)) || [];

    return <AboutFilm {...this.props} posters={posters} />;
  }
}

Movie.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  singleFilmRequest: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

const mstp = state => ({
  error: isError(state),
  loading: isLoading(state),
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
