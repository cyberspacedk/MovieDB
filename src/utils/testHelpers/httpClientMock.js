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
