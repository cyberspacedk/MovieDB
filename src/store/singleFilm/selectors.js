import { denormalize } from 'normalizr';
import { Movies } from '../../schema';

const isError = state => state.singleFilm.error;
const isLoading = state => state.singleFilm.loading;

const getMovie = (state, id) => {
  const mySchema = { movies: Movies };
  let result = {
    movies: {},
  };

  if (state.database.movies[id]) {
    const entities = {
      movies: {
        ...state.database.movies,
      },
      genres: {
        ...state.database.genres,
      },
    };

    result = denormalize({ movies: id }, mySchema, entities);
  }
  return result.movies;
};

export { isError, isLoading, getMovie };
