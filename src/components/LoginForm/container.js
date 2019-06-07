/* eslint-disable import/namespace */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Form from './component';
import {
  getNewRequestToken,
  getNewSessionId,
} from '../../Redux/Actions/authentificateUser';
import getToken from '../../Redux/Selectors/getTokenSelector';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2452661f8c986fe61a12ec7532335900';

const REQUEST_TOKEN_PATH =
  'https://api.themoviedb.org/3/authentication/token/new?api_key=';
const GET_SESSION_ID_PATH =
  'https://api.themoviedb.org/3/authentication/session/new?api_key=';

const PATH_REQUEST = `${REQUEST_TOKEN_PATH}${API_KEY}`;
const PATH_SESSION = `${GET_SESSION_ID_PATH}${API_KEY}`;

const FormContainer = ({
  requestToken,
  getNewRequestToken,
  getNewSessionId,
}) => {
  if (requestToken.length) {
    getNewSessionId(PATH_SESSION, requestToken);
  }

  return (
    <div>
      <button type="button" onClick={() => getNewRequestToken(PATH_REQUEST)}>
        REQUEST NEW TOKEn
      </button>
      <Form />
    </div>
  );
};

const mstp = state => ({
  requestToken: getToken(state),
});

const mdtp = {
  getNewRequestToken,
  getNewSessionId,
};
export default connect(
  mstp,
  mdtp,
)(FormContainer);

// (window.location = `https://www.themoviedb.org/authenticate/${}?redirect_to=http://localhost:3000`)
