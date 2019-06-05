import { renderHook } from 'react-hooks-testing-library';
import { useEventListener } from '../UseEventListener.hooks';
import { EventHandler } from '../UseEventListener.types';

const mouseMoveEvent = new Event('mousemove', {
  clientX: 100,
  clientY: 200,
} as any);
let mockHandler: EventHandler = (event: any): void => {};

const mockWindow = {
  addEventListener: (eventName, handler) => {
    mockHandler = handler;
  },
  dispatchEvent: event => mockHandler(event),
};

it('useEventListener', () => {
  const spyAddEventListener = jest
    .spyOn(window, 'addEventListener')
    .mockImplementation(mockWindow.addEventListener);
  const spyRemoveEventListener = jest.spyOn(window, 'removeEventListener');

  const handler = jest.fn();
  const { unmount } = renderHook(() => {
    useEventListener('foo', handler);
  });
  expect(spyAddEventListener).toBeCalled();
  mockWindow.dispatchEvent(mouseMoveEvent);
  expect(handler).toBeCalledWith(mouseMoveEvent);

  spyRemoveEventListener.mockReset();
  unmount();
  expect(spyRemoveEventListener).toBeCalled();
});
