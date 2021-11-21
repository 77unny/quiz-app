import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.p<{ align: 'left' | 'center' | 'right' }>`
  ${({ align }) => {
    let alignClass;
    switch (align) {
      case 'center':
        alignClass = tw`text-center`;
        break;
      case 'right':
        alignClass = tw`text-right`;
        break;
      default:
        alignClass = tw``;
        break;
    }
    return alignClass;
  }}

  ${tw`mb-8 text-gray-500`}

  span {
    ${tw`font-bold text-mainColor`}
  }
`;
