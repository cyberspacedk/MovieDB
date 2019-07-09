const isError = state => state.listDetails.error;
const isLoading = state => state.listDetails.loading;
const isEmpty = state => state.listDetails.ids.length === 0;

const getListName = (state, ownProps) => {
  const { id } = ownProps.match.params;
  let listName = '';
  if (state.database.lists[id]) {
    listName = state.database.lists[id].name;
  }
  return listName;
};

const getListMovies = state => {
  const { ids } = state.listDetails;
  const all = state.database.movies;
  return ids.map(id => all[id]);
};

export { getListMovies, isError, isLoading, isEmpty, getListName };
