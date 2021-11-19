import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import tw from 'twin.macro';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@200;300;400;500;600;700&display=swap');
  :lang(ko){
    font-family: 'IBM Plex Sans KR', sans-serif;
  }
  ${reset}

  * {
    ${tw`break-words`}
  }

  html, body {
    ${tw`bg-backgroundColor`}
  }


`;
