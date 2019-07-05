import { schema } from 'normalizr';

const Movies = new schema.Entity('movies');

const Lists = new schema.Entity('lists');

const Genres = new schema.Entity('genres');

const Movie = new schema.Entity('movie', {
  genres: [Genres],
});

export { Movies, Lists, Movie };
