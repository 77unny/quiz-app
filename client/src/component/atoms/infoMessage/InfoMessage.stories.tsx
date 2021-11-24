import { Meta, Story } from '@storybook/react';
import React from 'react';

import InfoMessage from './index';
import { IInfoMessageProps } from './types';

export default {
  title: 'Components/InfoMessage',
  component: InfoMessage,
  argTypes: {
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio' },
    },
  },
} as Meta;

interface IStoriesProps extends IInfoMessageProps {
  title: string;
}

const Template: Story<IStoriesProps> = args => {
  const { title } = args;
  return (
    <>
      <h3>{title}</h3>
      <div style={{ margin: '5px 0' }}>
        <InfoMessage {...args} />
      </div>
    </>
  );
};

const defaultArgs: IStoriesProps = {
  title: 'InfoMessage',
  children: '<span>랜덤</span> 난이도를 선택하셨습니다',
};

export const Default = Template.bind({});
Default.args = defaultArgs;
