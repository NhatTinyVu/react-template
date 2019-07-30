import { useEffect, DependencyList } from 'react';

const useEffectAsync = (
  effect: (...args: any) => any,
  deps?: DependencyList,
): void =>
  useEffect(() => {
    let subscribed = true;
    const isSubscribed = (): boolean => subscribed;

    effect(isSubscribed);
    return () => {
      subscribed = false;
    };
  }, deps);

export default useEffectAsync;
