import styled, {css} from 'styled-components';

const TagWrapper = styled.div`
  clip-path: polygon(0% 0%, 75% 0%, 85% 50%, 75% 100%, 0% 100%);
  background-color: green;
  width: 140px;
  height: 25px;
  padding: 0.3rem;
  display: flex;
  align-items: center;

  ${({variant}) => variant === 'discount' && 'background-color: red'}
  ${({variant}) => variant === 'recommended' && 'background-color: #1766a7'}
  ${({variant}) => variant === 'bestSelling' && 'background-color: #039834'}
`;

const TagText = styled.span`
  text-transform: uppercase;
  color: #fff;
  font-weight: 900;
  font-size: 0.75rem;
`;

export function ShopCardTag({text, variant}) {
  return (
    <TagWrapper variant={variant}>
      <TagText>{text}</TagText>
    </TagWrapper>
  );
}
