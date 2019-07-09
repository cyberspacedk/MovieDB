import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { singleFilmRequest } from '../../store/singleFilm/actions';
import AboutFilm from './component';
import { isError, isLoading, getMovie } from '../../store/singleFilm/selectors';

class Movie extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      singleFilmRequest,
    } = this.props;
    singleFilmRequest(id);
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

const mstp = (
  state,
  {
    match: {
      params: { id },
    },
  },
) => ({
  aboutFilm: getMovie(state, id),
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
