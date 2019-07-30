import { renderHook } from '@testing-library/react-hooks';
import { useToggleMountHandler } from '../UseEffectAsync.hooks';

const setMount = jest.fn().mockImplementation(cb => {
  cb();
});

beforeEach(() => {
  setMount.mockClear();
});

describe('useToggleMountHandler', () => {
  test('works correctly', () => {
    const {
      result: { current: handleToggleMount },
    } = renderHook(() => useToggleMountHandler({ setMount }));
    handleToggleMount();
    expect(setMount).toBeCalled();
  });
});
