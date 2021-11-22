import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`grid grid-cols-3 gap-6 mb-2 pb-2 border-b border-solid border-gray-200`}
`;

export const Row = styled.div`
  ${tw`flex items-center justify-between `}

  > span:first-child {
    ${tw` tracking-tighter`}
  }
  span,
  span p {
    ${tw`text-sm font-normal not-italic`}
  }
`;
