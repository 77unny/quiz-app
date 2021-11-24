import { Story } from '@storybook/react';
import React from 'react';

import Intro from './index';

export default {
  title: 'organisms/Intro',
  component: Intro,
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
        <Intro />
      </div>
    </>
  );
};

const defaultArgs: IStoriesProps = {
  title: '퀴즈앱 - Intro',
};

export const Default = Template.bind({});
Default.args = defaultArgs;
