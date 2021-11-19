import React, { ReactElement } from 'react';

import Intro from './component/intro';
import { AppContainer } from './style';

export default function App(): ReactElement {
  return (
    <AppContainer>
      <Intro />
    </AppContainer>
  );
}
