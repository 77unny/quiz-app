import { Story } from '@storybook/react';
import React from 'react';

import Quiz from './index';

export default {
  title: 'organisms/Quiz',
  component: Quiz,
};

interface IStoriesProps {
  title: string;
}

const Template: Story<IStoriesProps> = args => {
  const { title } = args;
  return (
    <>
      <h3>{title}</h3>
      <div style={{ margin: '5px 0' }}>
        <Quiz />
      </div>
    </>
  );
};

const defaultArgs: IStoriesProps = {
  title: '퀴즈앱 - Quiz',
};

export const Default = Template.bind({});
Default.args = defaultArgs;
