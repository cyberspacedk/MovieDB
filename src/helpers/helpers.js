/* eslint-disable no-bitwise */
/* eslint-disable radix */

export const getFilmDuration = time => {
  const hours = (time / 60) | 0;
  const minutes = time - hours * 60;
  return `${hours} h ${minutes} m`;
};

export const transformNumbers = sum =>
  `${sum
    .toString()
    .split(/(?=(?:\d{3})+$)/)
    .join(',')}.00`;
