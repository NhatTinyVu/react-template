import {
  useRef,
  Dispatch,
  useEffect,
  useCallback,
  SetStateAction,
} from 'react';
import { EventHandler, EventHandlerParams, Coords } from './types';

export const useEventListener = ({
  eventName,
  handler,
}: EventHandlerParams): void => {
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

export const useChangeCoordsHandler = ({
  setCoords,
}: {
  setCoords: Dispatch<SetStateAction<Coords>>;
}): Dispatch<SetStateAction<Coords>> => useCallback(setCoords, [setCoords]);
