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

// src/matchers/array.matchers.ts
function toMatchInAnyOrder(actualArray, expectedArray) {
  try {
    expectedArray.forEach((item) => {
      expect(actualArray).toContainEqual(item);
    });
  } catch (e) {
    return failResponse("Items in list are not the same");
  }
  try {
    expect(actualArray.length).toEqual(expectedArray.length);
  } catch (e) {
    return failResponse("Lengths do not match");
  }
  return passResponse();
}
export {
  failResponse,
  passResponse,
  toMatchInAnyOrder
};
//# sourceMappingURL=index.mjs.map