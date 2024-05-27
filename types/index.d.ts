interface CustomMatchers<R> extends Record<string, any> {

}

declare namespace jest {
    // noinspection JSUnusedGlobalSymbols
    interface Matchers<R> {

    }
}

declare module '@softwareascraft/jest-extensions' {
    const matchers: CustomMatchers<any>;
    export = matchers;
}