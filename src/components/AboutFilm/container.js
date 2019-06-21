import { connect } from 'react-redux';
import AboutFilm from './component';
import {
  isError,
  isLoading,
  getImages,
  getCasts,
  getCrew,
  getGenres,
  getFilmInfo,
} from '../../store/singleFilm/selectors';

const mstp = state => ({
  isError: isError(state),
  isLoading: isLoading(state),
  aboutFilm: getFilmInfo(state),
  images: getImages(state),
  casts: getCasts(state),
  crew: getCrew(state),
  genres: getGenres(state),
});
export default connect(mstp)(AboutFilm);
