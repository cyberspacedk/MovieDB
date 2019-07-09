const isError = state => state.myLists.error;
const isLoading = state => state.myLists.loading;
const getTotalPages = state => state.myLists.total_results;
const isEmpty = state => state.myLists.ids.length === 0;
const getCurrentPage = state => state.myLists.current_page;

const getLists = state => {
  const { ids } = state.myLists;
  const all = state.database.lists;
  return ids.map(id => all[id]);
};
export { getCurrentPage, isError, isEmpty, isLoading, getTotalPages, getLists };
