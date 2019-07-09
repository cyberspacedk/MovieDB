const initialState = {
  movies: {},
  lists: {},
  genres: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'WRITE_TO_DATABASE':
      return {
        movies: {
          ...state.movies,
          ...payload.movies,
        },
        lists: {
          ...state.lists,
          ...payload.lists,
        },
        genres: {
          ...state.genres,
          ...payload.genres,
        },
        cast: {
          ...state.cast,
          ...payload.cast,
        },
        crew: {
          ...state.crew,
          ...payload.crew,
        },
      };

    default:
      return state;
  }
};
