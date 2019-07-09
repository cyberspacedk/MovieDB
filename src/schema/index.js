import { schema } from 'normalizr';

const Lists = new schema.Entity('lists');

const Genres = new schema.Entity('genres');

const Crew = new schema.Entity('crew');

const Cast = new schema.Entity('cast');

const Movies = new schema.Entity('movies', {
  genres: [Genres],
  cast: [Cast],
  crew: [Crew],
});

export { Movies, Lists };
