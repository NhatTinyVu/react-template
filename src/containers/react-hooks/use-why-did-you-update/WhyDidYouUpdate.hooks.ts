import { useEffect, useRef } from 'react';
import { message } from 'antd';

export const useWhyDidYouUpdate = (props: any): void => {
  const previousProps = useRef<any>();

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({
        ...previousProps.current,
        ...props,
      });
      const changesObj: any = {};
      allKeys.forEach(key => {
        if (previousProps.current[key] !== props[key]) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changesObj).length) {
        message.info(`[why-did-you-update] ${JSON.stringify(changesObj)}`);
      }
    }

    previousProps.current = props;
  });
};
