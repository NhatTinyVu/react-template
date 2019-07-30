import { useCallback } from 'react';
import { ToggleMountHandlerParams } from './types';

export const useToggleMountHandler = ({
  setMount,
}: ToggleMountHandlerParams): (() => void) =>
  useCallback(() => setMount((mount: boolean) => !mount), [setMount]);
