export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'WRITE_TO_DATABASE':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
