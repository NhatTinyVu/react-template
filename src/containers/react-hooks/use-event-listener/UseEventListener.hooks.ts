import { useRef, useEffect } from 'react';
import { EventHandler } from './UseEventListener.types';

export const useEventListener = (
  eventName: string,
  handler: EventHandler,
): void => {
  const ref = useRef<EventHandler>();

  useEffect(() => {
    ref.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener: EventHandler = coords =>
      ref.current && ref.current(coords);

    window.addEventListener(eventName, eventListener);
    return () => window.removeEventListener(eventName, eventListener);
  }, [eventName]);
};
