const isloading = state => state.trending.loading;
const isError = state => state.trending.error;
const isEmpty = state => state.trending.ids.length === 0;

const getTrending = state => {
  const { ids } = state.trending;
  const { movies } = state.database;
  return ids.map(id => movies[id]);
};

export { getTrending, isloading, isError, isEmpty };
