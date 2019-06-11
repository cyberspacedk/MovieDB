/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDataRequest } from '../../Redux/Store/topFilms/actions';
import TopFilms from './component';

import {
  getTopFilmsSelector,
  isloading,
  isError,
} from '../../Redux/Store/topFilms/selectors';

class TopFilmsContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchDataRequest();
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
  fetchDataRequest,
};

TopFilmsContainer.propTypes = {
  getFilms: PropTypes.func.isRequired,
};

export default connect(
  mstp,
  mdtp,
)(TopFilmsContainer);
