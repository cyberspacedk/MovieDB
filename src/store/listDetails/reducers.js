const initialState = {
  ids: [],
  totalResults: 0,
  loading: false,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_LIST_DETAILS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_LIST_DETAILS_RESPONSE':
      return {
        ...state,
        ids: payload.ids,
        totalResults: payload.totalResults,
        loading: false,
      };
    case 'GET_LIST_DETAILS_ERROR':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
