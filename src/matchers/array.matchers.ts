import { passResponse, failResponse } from './responses';

export function toMatchInAnyOrder(actualArray: any[], expectedArray: any[]): jest.CustomMatcherResult {
  try {
    expectedArray.forEach(item => {
      expect(actualArray).toContainEqual(item);
    });
  } catch (e) {
    return failResponse('Items in list are not the same');
  }
  try {
    expect(actualArray.length).toEqual(expectedArray.length);
  } catch (e) {
    return failResponse('Lengths do not match');
  }
  return passResponse();
}
