const writeToDatabase = ({ movies, lists, genres, crew, cast }) => ({
  type: 'WRITE_TO_DATABASE',
  payload: {
    movies,
    lists,
    genres,
    crew,
    cast,
  },
});

export default writeToDatabase;
