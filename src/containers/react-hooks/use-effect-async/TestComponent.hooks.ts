import { useEffectAsync } from 'src/hooks';
import { wait } from 'src/utils';
import { UseSetStateAfterWaitingParams } from './types';

export const useSetStateAfterWaiting = ({
  period,
  setState,
}: UseSetStateAfterWaitingParams): void =>
  useEffectAsync(async isSubscribed => {
    await wait(period);

    if (!isSubscribed()) return;
    setState('state has just set');
  });
