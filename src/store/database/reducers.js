const initialState = {
  movies: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'WRITE_TO_DATABASE':
      return {
        movies: {
          ...state.movies,
          ...payload,
        },
      };

    default:
      return state;
  }
};
