const getMovies = state => state.database;
const getFieldIds = (state, field) => state[field].ids;

const getFieldMovies = (state, field) => {
  const ids = getFieldIds(state, field);
  const all = getMovies(state);
  const movies = ids.map(id => all[id]);
  return movies;
};

export default getFieldMovies;
