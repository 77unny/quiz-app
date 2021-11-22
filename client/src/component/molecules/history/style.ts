import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`p-4`}
`;

export const Head = styled.h3`
  ${tw`font-bold text-xl text-gray-600 border-b border-dashed border-gray-400`}
`;

export const Body = styled.div`
  ${tw`overflow-y-auto my-4`}
  max-height: 300px;
`;

export const Foot = styled.div`
  ${tw`flex justify-center space-x-2 w-full`}
`;

export const EmptyMessage = styled.p`
  ${tw`py-20 text-xl text-center`}
`;
