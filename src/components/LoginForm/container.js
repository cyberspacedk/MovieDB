import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isAuthentificated } from '../../Redux/Store/authentifiction/selectors';

import ParentForm from './component';

const ContainerForm = ({ isLogin }) => <ParentForm isLogin={isLogin} />;

const mstp = state => ({
  isLogin: isAuthentificated(state),
});

ContainerForm.propTypes = {
  isLogin: PropTypes.string.isRequired,
};
export default connect(mstp)(ContainerForm);
