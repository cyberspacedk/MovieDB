const httpClientMock = ({ method, response, reject } = { reject: false }) => ({
  [method]: () =>
    new Promise((resolve, deny) => {
      if (reject) {
        deny(response);
      } else {
        resolve(response);
      }
    }),
});

export default httpClientMock;

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
