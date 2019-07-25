import { renderHook } from '@testing-library/react-hooks';
import { useEventListener } from '../EventListener.hooks';
import { EventHandler } from '../types';

const mouseMoveEvent = new Event('mousemove', {
  clientX: 100,
  clientY: 200,
} as any);
let mockHandler: EventHandler = (event: any): void => {};

const mockWindow = {
  addEventListener: (eventName: string, handler: EventHandler) => {
    mockHandler = handler;
  },
  dispatchEvent: (event: any) => mockHandler(event),
};
describe('useEventListener', () => {
  test('works correctly', () => {
    const spyAddEventListener = jest
      .spyOn(window, 'addEventListener')
      .mockImplementation(mockWindow.addEventListener as any);
    const spyRemoveEventListener = jest.spyOn(window, 'removeEventListener');

    const handler = jest.fn();
    const { unmount } = renderHook(() => {
      useEventListener({ eventName: 'mouseevent', handler });
    });
    expect(spyAddEventListener).toBeCalled();
    mockWindow.dispatchEvent(mouseMoveEvent);
    expect(handler).toBeCalledWith(mouseMoveEvent);

    spyRemoveEventListener.mockReset();
    unmount();
    expect(spyRemoveEventListener).toBeCalled();
  });
});
