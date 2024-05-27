export const failResponse = (message: string): jest.CustomMatcherResult => {
  return {
    pass: false,
    message: () => (message ? message : 'fails by .fail() assertion'),
  };
};
export const passResponse = (): jest.CustomMatcherResult => {
  return {
    pass: true,
    message: () => '',
  };
};
