import { schema } from 'normalizr';

const Lists = new schema.Entity('lists');

const Genres = new schema.Entity('genres');

const Movies = new schema.Entity('movies', {
  genres: [Genres],
});

export { Movies, Lists };
