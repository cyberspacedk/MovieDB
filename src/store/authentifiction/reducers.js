const initialState = {
  username: JSON.parse(localStorage.getItem('USERNAME')) || '',
  sessionId: JSON.parse(localStorage.getItem('SESSION_ID')) || '',
};

const setUserDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        username: payload.username,
        sessionId: payload.sessionId,
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
