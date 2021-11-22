import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`flex flex-col items-center w-96 p-20 border-2 border-solid border-subColor rounded-2xl bg-white`}
`;

export const Title = styled.h2`
  ${tw`text-3xl text-center leading-10 tracking-tighter`}
  > span {
    ${tw`block font-bold text-4xl text-subColor tracking-wider`}
  }
`;

export const ButtonWrap = styled.div`
  ${tw`flex space-x-2 w-full`}
`;
