/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
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
    return <AboutFilm {...this.props} />;
  }
}

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
