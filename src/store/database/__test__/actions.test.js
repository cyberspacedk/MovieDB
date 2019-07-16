import writeToDatabase from '../actions';

describe('Database: actions', () => {
  it('should deliver data to database', () => {
    const entities = {
      movies: { 1: { id: 1 } },
      genres: { 1: { id: 1 } },
      lists: { 1: { id: 1 } },
    };
    const expectedAction = {
      type: 'WRITE_TO_DATABASE',
      payload: {
        ...entities,
      },
    };
    expect(writeToDatabase(entities)).toEqual(expectedAction);
  });
});
