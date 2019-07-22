import React, { useState, useCallback } from 'react';
import { useEventListener } from './EventListener.hooks';
import { Coords, CoordsHandler } from './types';

const UseState: React.FC = () => {
  const [coords, setCoords]: [Coords, (coords: Coords) => void] = useState({
    x: 0,
    y: 0,
  });
  const handler: CoordsHandler = useCallback(setCoords, []);

  useEventListener({ eventName: 'mousemove', handler });

  return (
    <div>
      The mouse position is {coords.x} | {coords.y}
    </div>
  );
};

export default UseState;
