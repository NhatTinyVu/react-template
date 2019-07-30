import { renderHook } from '@testing-library/react-hooks';
import { useEffectAsync } from '..';

describe('useEffectAsync', () => {
  test('works correctly', () => {
    const effect = jest.fn();
    const { unmount } = renderHook(() => useEffectAsync(effect, []));

    expect(effect).toBeCalled();
    const isSubscribed = effect.mock.calls[0][0];
    expect(isSubscribed()).toBe(true);
    unmount();
    expect(isSubscribed()).toBe(false);
  });
});
