"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  failResponse: () => failResponse,
  passResponse: () => passResponse,
  toMatchInAnyOrder: () => toMatchInAnyOrder
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  failResponse,
  passResponse,
  toMatchInAnyOrder
});
//# sourceMappingURL=index.js.map