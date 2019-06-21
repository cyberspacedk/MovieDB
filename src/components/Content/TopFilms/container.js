/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchDataRequest } from '../../../store/topFilms/actions';
import { singleFilmRequest } from '../../../store/singleFilm/actions';
import TopFilms from './component';
import {
  getTopFilmsSelector,
  isloading,
  isError,
} from '../../../store/topFilms/selectors';

export class TopFilmsContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchDataRequest();
  }

  render() {
    const { error: _e, fetchDataRequest: _f, ...restProps } = this.props;

    return <TopFilms {...restProps} />;
  }
}

export const mstp = state => ({
  topFilms: getTopFilmsSelector(state),
  loading: isloading(state),
  error: isError(state),
});

const mdtp = {
  fetchDataRequest,
  singleFilmRequest,
};

TopFilmsContainer.propTypes = {
  fetchDataRequest: PropTypes.func.isRequired,
  topFilms: PropTypes.arrayOf(PropTypes.shape),
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default compose(
  connect(
    mstp,
    mdtp,
  ),
  withRouter,
)(TopFilmsContainer);
