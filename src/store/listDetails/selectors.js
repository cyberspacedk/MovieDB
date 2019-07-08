const isError = state => state.listDetails.error;
const isLoading = state => state.listDetails.loading;
const isEmpty = state => state.listDetails.ids.length === 0;

const getListName = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return (
    Object.keys(state.database.lists).length && state.database.lists[id].name
  );
};

const getListMovies = state => {
  const { ids } = state.listDetails;
  const all = state.database.movies;
  return ids.map(id => all[id]);
};

export { getListMovies, isError, isLoading, isEmpty, getListName };
