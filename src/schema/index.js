import { schema } from 'normalizr';

const movies = new schema.Entity('movies');
const lists = new schema.Entity('lists');

export { movies, lists };
