const initialState = JSON.parse(localStorage.getItem('REQUEST_TOKEN')) || '';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_REQ_TOKEN':
      return payload;
    default:
      return state;
  }
};
