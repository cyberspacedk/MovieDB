export const getFilmDuration = time => {
  // eslint-disable-next-line no-bitwise
  const hours = (time / 60) | 0;
  const minutes = time - hours * 60;
  return `${hours} h ${minutes} m`;
};

export const transformNumbers = sum =>
  `${sum
    .toString()
    .split(/(?=(?:\d{3})+$)/)
    .join(',')}.00`;

/* istanbul ignore next */
export const httpClientMock = (
  { method, response, reject } = { reject: false, response: {} },
) => {
  const httpClient = {
    [method]: () =>
      new Promise((resolve, deny) => {
        if (reject) {
          deny(response);
        } else {
          resolve(response);
        }
      }),
  };
  const spy = jest.spyOn(httpClient, method);
  httpClient.spy = spy;
  return httpClient;
};

export const multiHttpClientMock = mocks => {
  const httpClient = { spies: {} };
  mocks.forEach(mock => {
    if (httpClient[mock.method] === undefined) {
      httpClient[mock.method] = jest.fn();
      const spy = jest.spyOn(httpClient, mock.method);
      httpClient.spies[mock.method] = spy;
    }
    httpClient[mock.method].mockImplementationOnce(
      () =>
        new Promise((resolve, deny) => {
          if (mock.reject) {
            deny(mock.response);
          } else {
            resolve(mock.response);
          }
        }),
    );
  });

  return httpClient;
};
