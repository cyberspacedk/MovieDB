export const initialState = {
  films: [],
  loading: false,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case 'FETCH_RESPONSE':
      return {
        ...state,
        films: payload,
        loading: false,
      };
    default:
      return state;
  }
};
