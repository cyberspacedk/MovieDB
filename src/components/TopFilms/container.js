/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDataRequest } from '../../store/topFilms/actions';
import TopFilms from './component';
import {
  getTopFilmsSelector,
  isloading,
  isError,
} from '../../store/topFilms/selectors';

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
};

TopFilmsContainer.propTypes = {
  fetchDataRequest: PropTypes.func.isRequired,
};

export default connect(
  mstp,
  mdtp,
)(TopFilmsContainer);
