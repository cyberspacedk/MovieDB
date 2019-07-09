/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListDetails from './component';
import { getCreatedListRequest } from '../../../store/myLists/actions';
import {
  getListDetailsRequest,
  deleteMovieFromListRequest,
} from '../../../store/listDetails/actions';
import {
  getListMovies,
  isError,
  isLoading,
  isEmpty,
  getListName,
} from '../../../store/listDetails/selectors';

class ListDetailsContainer extends Component {
  componentDidMount() {
    const {
      getCreatedListRequest,
      getListDetailsRequest,
      match: {
        params: { id },
      },
    } = this.props;
    getCreatedListRequest();
    getListDetailsRequest(id);
  }

  render() {
    return <ListDetails {...this.props} />;
  }
}

ListDetailsContainer.propTypes = {
  id: PropTypes.number.isRequired,
  getListDetailsRequest: PropTypes.func.isRequired,
  getCreatedListRequest: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
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
  loading: isLoading(state),
  error: isError(state),
  empty: isEmpty(state),
  detailsList: getListMovies(state),
  listName: getListName(state, id),
});

const mdtp = {
  getListDetailsRequest,
  deleteMovieFromListRequest,
  getCreatedListRequest,
};
export default connect(
  mstp,
  mdtp,
)(ListDetailsContainer);
