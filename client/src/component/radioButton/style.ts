import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.label`
  ${tw`text-center`}
  font-size:0;
  line-height: 0;

  span {
    ${tw`block w-16 px-2 py-2 text-gray-400 text-sm rounded-lg border border-solid border-gray-200 bg-white cursor-pointer`}
  }

  input[type='radio'] {
    ${tw`absolute w-0 h-0 opacity-0`}
  }

  input[type='radio']:checked ~ span {
    ${tw`font-semibold text-white border border-solid  border-subColor bg-subColor`}
  }
`;
