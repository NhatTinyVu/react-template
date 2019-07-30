import { renderHook } from '@testing-library/react-hooks';
import { useSetStateAfterWaiting } from '../TestComponent.hooks';

const setState = jest.fn();

beforeEach(() => {
  setState.mockClear();
});

describe('useSetStateAfterWaiting', () => {
  test('did not setState after unmounted', done => {
    const { unmount } = renderHook(() =>
      useSetStateAfterWaiting({ period: 0, setState }),
    );
    unmount();
    setTimeout(() => {
      expect(setState).not.toBeCalled();
      done();
    }, 10);
  });

  test('works correctly', done => {
    renderHook(() => useSetStateAfterWaiting({ period: 0, setState }));
    setTimeout(() => {
      expect(setState).toBeCalled();
      done();
    }, 10);
  });
});
