const writeToDatabase = ({ movies = {}, lists = {}, genres = {} }) => ({
  type: 'WRITE_TO_DATABASE',
  payload: {
    movies,
    lists,
    genres,
  },
});

export default writeToDatabase;
