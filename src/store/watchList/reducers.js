const initialState = {
  watchlist_list: [],
  total_results: 0,
  loading: false,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_WATCHLIST_REQUEST':
      return {
        ...state,
        loadiing: true,
        error: false,
      };
    case 'GET_WATCHLIST_RESPONSE':
      return {
        ...payload,
        loading: false,
        error: false,
      };
    case 'GET_WATCHLIST_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
