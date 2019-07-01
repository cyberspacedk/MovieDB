const initialState = {
  list_details: [],
  list_name: '',
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
        list_details: payload.listDetails,
        list_name: payload.listName,
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
