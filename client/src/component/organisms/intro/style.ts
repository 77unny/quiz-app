import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`flex flex-col items-center w-10/12 p-4 sm:w-96 sm:p-20 border-2 border-solid border-subColor rounded-2xl bg-white`}
`;

export const Title = styled.h2`
  ${tw`text-xl sm:text-3xl text-center sm:leading-10 tracking-tighter`}
  > span {
    ${tw`block font-bold text-2xl sm:text-4xl text-subColor tracking-wider`}
  }
`;

export const ButtonWrap = styled.div`
  ${tw`flex space-x-2 w-full`}
`;
