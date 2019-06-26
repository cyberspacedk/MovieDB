export const initialState = {
  response: {},
  loading: false,
  error: false,
  query: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SEARCH_REQUEST':
      return {
        ...state,
        loading: true,
        query: payload,
      };
    case 'SEARCH_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'SEARCH_RESPONSE':
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
