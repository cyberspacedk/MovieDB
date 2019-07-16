export const initialState = {
  ids: [],
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
        ids: payload.ids,
        total_results: payload.total_results,
        current_page: payload.current_page,
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
