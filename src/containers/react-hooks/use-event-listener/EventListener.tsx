import React, { useState } from 'react';
import {
  useEventListener,
  useChangeCoordsHandler,
} from './EventListener.hooks';
import { Coords } from './types';

const UseState: React.FC = () => {
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });
  const handleChangeCoords = useChangeCoordsHandler({ setCoords });

  useEventListener({ eventName: 'mousemove', handler: handleChangeCoords });

  return (
    <div>
      The mouse position is {coords.x} | {coords.y}
    </div>
  );
};

export default UseState;
