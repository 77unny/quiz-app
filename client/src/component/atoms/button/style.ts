import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Button = styled.button<{
  buttonType: 'default' | 'primary';
  size: 'default' | 'large' | 'middle' | 'small';
  disabled: boolean;
}>`
  ${({ buttonType }) =>
    buttonType === 'default'
      ? tw`text-gray-600 border border-gray-200 bg-white hover:bg-gray-50`
      : tw`font-bold text-white border-2 border-subColor bg-mainColor bg-opacity-80 hover:bg-opacity-100`}

  ${({ disabled }) =>
    disabled
      ? tw`text-gray-300 bg-gray-100 border border-gray-200 hover:bg-gray-100 cursor-default`
      : tw` cursor-pointer`}
  
  ${({ size, buttonType }) => {
    let sizeClass;
    switch (size) {
      case 'large':
        sizeClass = tw`w-full`;
        break;
      case 'middle':
        sizeClass = tw`w-1/2`;
        break;
      case 'small':
        sizeClass = tw`w-1/3`;
        break;
      default:
        sizeClass = buttonType === 'default' ? tw`w-1/2` : tw`w-full`;
        break;
    }
    return sizeClass;
  }}
  ${tw`relative h-12 text-lg rounded-lg border-solid transition ease-in`}
`;

export const PrimaryIcon = styled(FontAwesomeIcon)`
  ${tw`absolute top-1/2 right-4`}
  transform: translateY(-50%);
`;
