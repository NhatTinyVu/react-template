import React, { useState } from 'react';
import { useSetStateAfterWaiting } from './TestComponent.hooks';

const period = 2000;

const TestComponent: React.FC = () => {
  const [state, setState] = useState<string>('state is not set');
  useSetStateAfterWaiting({ period, setState });

  return <p>{state}</p>;
};

export default TestComponent;
