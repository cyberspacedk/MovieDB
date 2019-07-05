/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
export const initialState = {
  response: {},
  ids: [],
  loading: false,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SINGLE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SINGLE_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'SINGLE_RESPONSE':
      const {
        backdrops,
        budget,
        cast,
        crew,
        genres,
        id,
        original_language,
        original_title,
        overview,
        runtime,
        revenue,
        ids,
      } = payload;

      const totalData = {
        backdrops,
        budget,
        cast,
        crew,
        genres,
        id,
        original_language,
        original_title,
        overview,
        runtime,
        revenue,
      };
      return {
        ...state,
        ids,
        response: totalData,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
