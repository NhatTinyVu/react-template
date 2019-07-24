import { useEffect, useRef } from 'react';
import { message } from 'antd';
import { getDiffValues } from './WhyDidYouUpdate.utils';

export const useWhyDidYouUpdate = (props: any): void => {
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
