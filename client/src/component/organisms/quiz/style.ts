import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`flex flex-col w-10/12 sm:w-120 p-4 sm:p-8 border-2 border-solid border-mainColor rounded-2xl bg-subColor bg-opacity-20`}
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

export const Inner = styled.div<{ ended?: boolean }>`
  ${tw`overflow-hidden relative flex flex-col p-4 sm:p-8 rounded-2xl bg-white`}

  &::before {
    ${tw`absolute -top-2 -left-2 font-black text-8xl text-subColor text-opacity-20 z-0`}
    ${({ ended }) => (ended ? `content: '🎉'` : `content: 'Q'`)}
  }
`;

export const Subject = styled.p`
  ${tw`relative mb-4 pb-3 font-bold text-xl text-gray-600 border-b border-dashed border-gray-400 leading-6`}
`;

export const ResultInfo = styled.ul`
  ${tw`mb-4 px-4`}
  li {
    ${tw`flex justify-between items-center `}
    & + li {
      ${tw`mt-2`}
    }
    span,
    p {
      ${tw`text-gray-400 font-normal not-italic`}
    }
  }
`;

export const ButtonWrap = styled.div`
  ${tw`flex space-x-2`}
`;
