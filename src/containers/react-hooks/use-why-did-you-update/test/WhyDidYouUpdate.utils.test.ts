import { getDiffValues } from '../WhyDidYouUpdate.utils';

describe('getDiffValues', () => {
  test('returns empty when equal', () => {
    expect(getDiffValues({ a: 1, b: 2 }, { a: 1, b: 2 })).toEqual({});
  });

  test('works correctly', () => {
    expect(getDiffValues({ a: 1, b: 2 }, { a: 1, b: 3, c: 4 })).toEqual({
      b: { from: 2, to: 3 },
      c: { from: undefined, to: 4 },
    });
  });
});
