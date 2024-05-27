interface CustomMatchers<R> extends Record<string, any> {
  failResponse(message: string): R;
  passResponse(): R;
  toMatchInAnyOrder(actualArray: any[], expectedArray: any[]): R;
}

declare namespace jest {
  interface Matchers<R> {
    failResponse(message: string): R;
    passResponse(): R;
    toMatchInAnyOrder(expectedArray: any[]): R;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Expect extends CustomMatchers<any> {}
}

declare module '@softwareascraft/jest-extensions' {
  const matchers: CustomMatchers<any>;
  export = matchers;
}
