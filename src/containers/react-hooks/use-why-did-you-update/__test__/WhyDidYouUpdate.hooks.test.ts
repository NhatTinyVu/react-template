import { renderHook } from '@testing-library/react-hooks';
import { message } from 'antd';
import {
  useWhyDidYouUpdate,
  useIncrementHandler,
  useChangeUserHandler,
} from '../WhyDidYouUpdate.hooks';
import * as Utils from '../WhyDidYouUpdate.utils';

const messageInfo = jest.spyOn(message, 'info');
const getDiffValues = jest.spyOn(Utils, 'getDiffValues');
const setCount = jest.fn();
const setUserId = jest.fn();

beforeEach(() => {
  messageInfo.mockClear();
  getDiffValues.mockClear();
  setCount.mockClear();
  setUserId.mockClear();
});

describe('useWhyDidYouUpdate', () => {
  test("don't show message when props don't have changes", () => {
    getDiffValues.mockImplementation(() => ({}));
    const { rerender } = renderHook(() => useWhyDidYouUpdate({}));
    rerender({});

    expect(messageInfo).not.toBeCalled();
  });

  test('show message when props have changes', () => {
    getDiffValues.mockImplementation(() => ({ a: 1 }));
    const { rerender } = renderHook(() => useWhyDidYouUpdate({}));
    rerender({});

    expect(messageInfo).toBeCalledWith('[why-did-you-update] {"a":1}');
  });
});

describe('useIncrementHandler', () => {
  test('works correctly', () => {
    setCount.mockImplementation((fn: () => void) => fn());
    const {
      result: { current: handleInscrement },
    } = renderHook(() => useIncrementHandler({ setCount }));
    handleInscrement();

    expect(setCount).toBeCalled();
  });
});

describe('useChangeUserHandler', () => {
  test('works correctly', () => {
    setUserId.mockImplementation((fn: () => void) => fn());
    const {
      result: { current: handleChangeUser },
    } = renderHook(() => useChangeUserHandler({ setUserId }));
    handleChangeUser();

    expect(setUserId).toBeCalled();
  });
});
