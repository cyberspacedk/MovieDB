const initialState = {
  username: '',
  sessionId: JSON.parse(localStorage.getItem('SESSION_ID')) || '',
};

const setUserDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SESSION_ID':
      return {
        ...state,
        sessionId: payload,
      };
    case 'DELETE_SESSION_ID':
      return {
        ...state,
        sessionId: '',
      };
    default:
      return state;
  }
};

export default setUserDataReducer;
