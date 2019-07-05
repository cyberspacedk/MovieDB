const writeToMoviesDatabase = data => ({
  type: 'WRITE_MOVIES_TO_DATABASE',
  payload: data,
});

const writeListsToDataBase = data => ({
  type: 'WRITE_LISTS_TO_DATABASE',
  payload: data,
});

export { writeToMoviesDatabase, writeListsToDataBase };
