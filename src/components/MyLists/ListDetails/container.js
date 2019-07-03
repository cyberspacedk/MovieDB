/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListDetails from './component';
import {
  getListDetailsRequest,
  deleteMovieFromListRequest,
} from '../../../store/listDetails/actions';
import {
  getListDetails,
  isError,
  isLoading,
  isEmpty,
  getListName,
} from '../../../store/listDetails/selectors';

class ListDetailsContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getListDetailsRequest(id);
  }

  render() {
    return <ListDetails {...this.props} />;
  }
}

ListDetailsContainer.propTypes = {
  id: PropTypes.number.isRequired,
  getListDetailsRequest: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

const mstp = state => ({
  loading: isLoading(state),
  error: isError(state),
  empty: isEmpty(state),
  detailsList: getListDetails(state),
  listName: getListName(state),
});

const mdtp = {
  getListDetailsRequest,
  deleteMovieFromListRequest,
};
export default connect(
  mstp,
  mdtp,
)(ListDetailsContainer);
