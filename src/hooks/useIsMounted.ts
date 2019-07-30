import { useEffect, useCallback } from 'react';

const useIsMounted = (): (() => boolean) => {
  let isMounted = false;

  useEffect(() => {
    isMounted = true;

    return () => {
      isMounted = false;
    };
  }, []);

  return useCallback<() => boolean>(() => isMounted, [isMounted]);
};

export default useIsMounted;
