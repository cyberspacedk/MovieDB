const initialState = '';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_SESSION_TOKEN':
      return payload;
    default:
      return state;
  }
};
