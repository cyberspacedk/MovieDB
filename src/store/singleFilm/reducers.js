export const initialState = {
  response: {},
  loading: false,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SINGLE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SINGLE_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'SINGLE_RESPONSE':
      return {
        ...state,
        response: payload,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
