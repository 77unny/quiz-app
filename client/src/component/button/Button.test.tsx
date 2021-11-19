import 'jest-styled-components';

import { render } from '@testing-library/react';
import React from 'react';

import Button from './index';

describe('<Button />', () => {
  it('Default Button', () => {
    const { getByText } = render(<Button children="Default Button" />);

    expect(getByText('Default Button')).toHaveStyleRule('width', '50%');
    expect(getByText('Default Button')).toHaveStyleRule('background-color', 'rgba(255,255,255,var(--tw-bg-opacity))');
    expect(getByText('Default Button').getAttribute('disabled')).toBe(null);
  });

  it('Primary Button', () => {
    const { getByText } = render(<Button children="Primary Button" buttonType="primary" />);

    expect(getByText('Primary Button')).toHaveStyleRule('width', '100%');
    expect(getByText('Primary Button')).toHaveStyleRule('background-color', 'rgba(0,200,150,var(--tw-bg-opacity))');
    expect(getByText('Primary Button').getAttribute('disabled')).toBe(null);
  });

  it('Disabled Button', () => {
    const { getByText } = render(<Button children="Disabled Button" disabled />);

    expect(getByText('Disabled Button')).toHaveStyleRule('width', '50%');
    expect(getByText('Disabled Button')).toHaveStyleRule('background-color', 'rgba(243,244,246,var(--tw-bg-opacity))');
    expect(getByText('Disabled Button')).toHaveStyleRule('cursor', 'default');
    expect(getByText('Disabled Button').getAttribute('disabled')).toBe('');
  });
});
