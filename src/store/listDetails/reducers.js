const initialState = {
  list_details: [],
  ids: [],
  list_name: '',
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
        list_details: payload.list_details,
        ids: payload.ids,
        list_name: payload.list_name,
        totalResults: payload.totalResults,
        loading: false,
      };
    case 'GET_LIST_DETAILS_ERROR':
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
