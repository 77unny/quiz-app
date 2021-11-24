import 'jest-styled-components';

import { render } from '@testing-library/react';
import React from 'react';

import InfoMessage from './index';

describe('<InfoMessage />', () => {
  it('Default InfoMessage', () => {
    const { container } = render(<InfoMessage children="<span>랜덤</span> 난이도를 선택하셨습니다" />);

    expect(container.firstChild).toMatchSnapshot(`<span>랜덤</span> 난이도를 선택하셨습니다`);
  });
});
