import { useCallback, useEffect, useRef } from 'react';
import { message } from 'antd';
import { IncrementHandlerParams, ChangeUserHandlerParams } from './types';
import { getDiffValues } from './WhyDidYouUpdate.utils';

export const useWhyDidYouUpdate = (props?: any): void => {
  const previousProps = useRef<any>();

  useEffect(() => {
    if (previousProps.current) {
      const diffValues = getDiffValues(previousProps.current, props);

      if (Object.keys(diffValues).length) {
        message.info(`[why-did-you-update] ${JSON.stringify(diffValues)}`);
      }
    }
    previousProps.current = props;
  });
};

export const useIncrementHandler = ({
  setCount,
}: IncrementHandlerParams): (() => void) =>
  useCallback(() => setCount((count: number) => count + 1), [setCount]);

export const useChangeUserHandler = ({
  setUserId,
}: ChangeUserHandlerParams): (() => void) =>
  useCallback(() => setUserId((userId: number) => userId + 1), [setUserId]);
