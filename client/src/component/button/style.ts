import styled from 'styled-components';
import tw from 'twin.macro';

export const Button = styled.button<{ buttonType: 'default' | 'primary'; disabled: boolean }>`
  ${({ buttonType }) =>
    buttonType === 'default'
      ? tw`w-1/2 text-gray-600 border border-gray-200 bg-white hover:bg-gray-50`
      : tw`w-full font-bold text-white border-2 border-subColor bg-mainColor bg-opacity-80 hover:bg-opacity-100`}

  ${({ disabled }) =>
    disabled
      ? tw`text-gray-300 bg-gray-100 border border-gray-200 hover:bg-gray-100 cursor-default`
      : tw` cursor-pointer`}
  
  ${tw`h-10 text-lg rounded border-solid transition ease-in`}
`;
