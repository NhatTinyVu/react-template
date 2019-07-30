import { Dispatch, SetStateAction } from 'react';

export interface ToggleMountHandlerParams {
  setMount: Dispatch<SetStateAction<boolean>>;
}

export interface UseSetStateAfterWaitingParams {
  period: number;
  setState: Dispatch<SetStateAction<string>>;
}
