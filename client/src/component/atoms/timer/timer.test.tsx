import 'jest-styled-components';

import { render } from '@testing-library/react';
import React from 'react';

import Timer from './index';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('<Timer />', () => {
  it('prefix - 지속시간', () => {
    const { container } = render(<Timer prefix={'지속시간'} />);

    expect(container.firstChild).toMatchSnapshot(`지속시간`);
  });
});
