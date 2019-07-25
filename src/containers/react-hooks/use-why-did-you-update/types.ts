import { Dispatch, SetStateAction } from 'react';

export interface CounterProps {
  count: number;
  style: object;
}

export interface IncrementHandlerParams {
  setCount: Dispatch<SetStateAction<number>>;
}

export interface ChangeUserHandlerParams {
  setUserId: Dispatch<SetStateAction<number>>;
}
