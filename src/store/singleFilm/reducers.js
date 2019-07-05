export const initialState = {
  id: [],
  cast: [],
  crew: [],
  backdrops: [],
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
        id: payload.id,
        cast: payload.cast,
        crew: payload.crew,
        backdrops: payload.backdrops,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
