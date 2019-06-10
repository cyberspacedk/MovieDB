const initialState = {
  username: JSON.parse(localStorage.getItem('USERNAME')) || '',
  sessionId: JSON.parse(localStorage.getItem('SESSION_ID')) || '',
};

const setUserDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_USERLOGIN':
      return {
        ...state,
        username: payload,
      };
    case 'SET_SESSION_ID':
      return {
        ...state,
        sessionId: payload,
      };
    case 'DELETE_SESSION_ID':
      return {
        username: '',
        sessionId: '',
      };
    default:
      return state;
  }
};

export default setUserDataReducer;
