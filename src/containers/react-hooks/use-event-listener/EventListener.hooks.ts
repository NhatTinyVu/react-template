import { useRef, useEffect } from 'react';
import { EventHandler, UseEventHandlerParams } from './types';

export const useEventListener = ({
  eventName,
  handler,
}: UseEventHandlerParams): void => {
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
