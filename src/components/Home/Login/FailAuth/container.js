/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { tryAgain } from '../../../../store/authentifiction/actions';
import FailAuth from './component';

const FailAuthContainer = ({ tryAgain }) => {
  useEffect(() => {
    setTimeout(() => {
      tryAgain();
    }, 2000);
  });

  return <FailAuth />;
};
const mdtp = {
  tryAgain,
};
export default connect(
  null,
  mdtp,
)(FailAuthContainer);
