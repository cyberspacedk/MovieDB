export const initialState = {
  loading: false,
  error: false,
};

export default (state = initialState, { type }) => {
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
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
