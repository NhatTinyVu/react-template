import React, { useState } from 'react';
import TestComponent from './TestComponent';
import { useToggleMountHandler } from './UseEffectAsync.hooks';

const SafePromise: React.FC = () => {
  const [mount, setMount] = useState<boolean>(true);
  const handleToggleMount = useToggleMountHandler({ setMount });
  return (
    <div>
      <button onClick={handleToggleMount}>Mount: {mount.toString()}</button>
      {mount && <TestComponent />}
    </div>
  );
};

export default SafePromise;
