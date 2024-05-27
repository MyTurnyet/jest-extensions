// src/matchers/responses.ts
var failResponse = (message) => {
  return {
    pass: false,
    message: () => message ? message : "fails by .fail() assertion"
  };
};
var passResponse = () => {
  return {
    pass: true,
    message: () => ""
  };
};
export {
  failResponse,
  passResponse
};
//# sourceMappingURL=index.mjs.map
