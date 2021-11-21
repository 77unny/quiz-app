import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`mb-4`}

  ul {
    ${tw`grid grid-cols-2 gap-2 `}
    li {
      ${tw``}
    }
  }

  label {
    ${tw`flex flex-col h-full`}
    span {
      ${tw`flex justify-center items-center w-auto h-full`}
    }
  }
`;
