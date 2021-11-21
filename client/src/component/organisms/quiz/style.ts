import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`flex flex-col w-120 p-8 border-2 border-solid border-mainColor rounded-2xl bg-subColor bg-opacity-20`}
`;

export const Title = styled.h2`
  ${tw`flex justify-between items-center`}
  > span:first-child {
    ${tw`font-bold text-3xl tracking-tighter italic`}
    span {
      ${tw`font-light`}
    }
  }
  > span:last-child {
    ${tw`text-sm text-mainColor text-opacity-80`}
  }
`;

export const Inner = styled.div`
  ${tw`overflow-hidden relative flex flex-col p-8 rounded-2xl bg-white`}

  &::before {
    content: 'Q';
    ${tw`absolute -top-2 -left-2 font-black text-8xl text-subColor text-opacity-20 z-0`}
  }
`;

export const Subject = styled.p`
  ${tw`mb-4 pb-3 font-bold text-xl text-gray-600 border-b border-dashed border-gray-400 leading-6`}
`;
