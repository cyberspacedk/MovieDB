export const initialState = {
  ids: [],
  page: 0,
  total_results: 0,
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
        ids: payload.ids,
        page: payload.page,
        total_results: payload.total_results,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
