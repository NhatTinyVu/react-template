import React, { memo } from 'react';
import { useWhyDidYouUpdate } from './WhyDidYouUpdate.hooks';
import { CounterProps } from './types';

const Counter: React.FC<CounterProps> = ({ count, style }: CounterProps) => {
  useWhyDidYouUpdate({ count, style });
  return <div style={style}>{count}</div>;
};

export default memo(Counter);
