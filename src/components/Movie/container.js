/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { singleFilmRequest } from '../../store/singleFilm/actions';
import AboutFilm from './component';
import {
  isError,
  isLoading,
  getGenres,
  getMovie,
} from '../../store/singleFilm/selectors';

class Movie extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.singleFilmRequest(id);
  }

  render() {
    return <AboutFilm {...this.props} />;
  }
}

Movie.propTypes = {
  aboutFilm: PropTypes.arrayOf(PropTypes.object).isRequired,
  singleFilmRequest: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

const mstp = (state, ownProps) => ({
  aboutFilm: getMovie(state, ownProps) || {},
  genres: getGenres(state, ownProps) || [],
  error: isError(state),
  loading: isLoading(state),
});

const mdtp = {
  singleFilmRequest,
};

export default connect(
  mstp,
  mdtp,
)(Movie);
