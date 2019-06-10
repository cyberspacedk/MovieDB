/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_FILMS_PATH } from '../../api/api';
import fetchFilms from '../../Redux/Actions/getTopFilms';
import TopFilms from './component';

import {
  getTopFilmsSelector,
  isloading,
  isError,
} from '../../Redux/Selectors/getTopFilmsSelector';

class TopFilmsContainer extends Component {
  componentDidMount() {
    this.props.getFilms(GET_FILMS_PATH);
  }

  render() {
    return <TopFilms {...this.props} />;
  }
}

const mstp = state => ({
  topFilms: getTopFilmsSelector(state),
  loading: isloading(state),
  error: isError(state),
});

const mdtp = {
  getFilms: fetchFilms,
};

TopFilmsContainer.propTypes = {
  getFilms: PropTypes.func.isRequired,
};

export default connect(
  mstp,
  mdtp,
)(TopFilmsContainer);
