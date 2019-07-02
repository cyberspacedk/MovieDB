const initialState = {
  lists: [],
  total_results: 0,
  current_page: 0,
  loading: false,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_CREATED_LIST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_CREATED_LIST_RESPONSE':
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case 'GET_CREATED_LIST_ERROR':
      return {
        ...state,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
};
