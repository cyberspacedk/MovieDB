const isError = state => state.listDetails.error;
const isLoading = state => state.listDetails.loading;
const isEmpty = state => state.listDetails.ids.length === 0;
const getListName = state => state.listDetails.list_name;

const getListMovies = state => {
  const { ids } = state.listDetails;
  const all = state.database;
  return ids.map(id => all[id]);
};

export { getListMovies, isError, isLoading, isEmpty, getListName };
