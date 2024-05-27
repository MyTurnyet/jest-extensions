declare const failResponse: (message: string) => jest.CustomMatcherResult;
declare const passResponse: () => jest.CustomMatcherResult;

declare function toMatchInAnyOrder(actualArray: any[], expectedArray: any[]): jest.CustomMatcherResult;

export { failResponse, passResponse, toMatchInAnyOrder };
