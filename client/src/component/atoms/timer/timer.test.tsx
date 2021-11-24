import 'jest-styled-components';

import { render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

import Timer from './index';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
  jest.clearAllMocks();
  jest.useRealTimers();
});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('<Timer />', () => {
  it('[Timer] prefix - 지속시간', () => {
    const { container } = render(<Timer prefix={'지속시간'} />);

    expect(container.firstChild).toMatchSnapshot(`지속시간`);
  });

  it('[Timer] 1초 경과  - 00:01', () => {
    const { getByText } = render(<Timer />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText('00:01'));
  });

  it('[Timer] 61초 경과  - 01:01', () => {
    const { getByText } = render(<Timer />);
    act(() => {
      jest.advanceTimersByTime(61000);
    });

    expect(getByText('01:01'));
  });
});
