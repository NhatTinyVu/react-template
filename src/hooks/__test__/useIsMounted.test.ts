import { renderHook } from '@testing-library/react-hooks';
import { useIsMounted } from '..';

describe('useIsMounted', () => {
  test('works correctly', () => {
    let isMounted: () => boolean = () => false;
    const { unmount } = renderHook(() => {
      isMounted = useIsMounted();
    });

    expect(isMounted()).toBe(true);
    unmount();
    expect(isMounted()).toBe(false);
  });
});
