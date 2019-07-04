const writeToDatabase = data => ({
  type: 'WRITE_TO_DATABASE',
  payload: data,
});

export default writeToDatabase;
