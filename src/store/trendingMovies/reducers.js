export const initialState = {
  ids: [],
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
        error: true,
      };
    case 'FETCH_RESPONSE':
      return {
        ...state,
        ids: payload,
        loading: false,
      };
    default:
      return state;
  }
};
