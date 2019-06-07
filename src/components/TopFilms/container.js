/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchFilms from '../../Redux/Actions/getTopFilms';
import TopFilms from './component';

import {
  getTopFilmsSelector,
  isloading,
  isError,
} from '../../Redux/Selectors/getTopFilmsSelector';

// eslint-disable-next-line no-unused-vars
const uri =
  'https://api.themoviedb.org/3/trending/movie/week?api_key=2452661f8c986fe61a12ec7532335900';

class TopFilmsContainer extends Component {
  componentDidMount() {
    this.props.getFilms(uri);
  }

  render() {
    // eslint-disable-next-line react/prop-types

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
