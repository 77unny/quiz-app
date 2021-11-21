import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button from './index';
import { IButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    buttonType: {
      options: ['default', 'primary'],
      control: { type: 'radio' },
    },
  },
} as Meta;

interface IStoriesProps extends IButtonProps {
  title: string;
}

const Template: Story<IStoriesProps> = args => {
  const { title } = args;
  return (
    <>
      <h3>{title}</h3>
      <div style={{ margin: '5px 0' }}>
        <Button {...args} />
      </div>
    </>
  );
};

const defaultArgs: IStoriesProps = {
  title: 'Button',
  children: ' Button',
  buttonType: 'default',
  disabled: false,
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  title: 'primary Button',
  buttonType: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultArgs,
  title: 'Disabled Button',
  disabled: true,
};
