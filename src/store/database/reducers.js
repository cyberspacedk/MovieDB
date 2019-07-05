const initialState = {
  movies: {},
  lists: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'WRITE_MOVIES_TO_DATABASE':
      return {
        movies: {
          ...state.movies,
          ...payload,
        },
      };

    case 'WRITE_LISTS_TO_DATABASE':
      return {
        ...state,
        lists: {
          ...state.lists,
          ...payload,
        },
      };
    default:
      return state;
  }
};
