import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_FILMS_PATH } from '../../api';
import fetchFilms from '../../Redux/Store/getTopChart/actions';
import TopFilms from './component';

import {
  getTopFilmsSelector,
  isloading,
  isError,
} from '../../Redux/Store/getTopChart/selectors';

class TopFilmsContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
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
