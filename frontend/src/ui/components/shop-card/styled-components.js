import styled, {css} from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid #c2d4e5;

  &:hover .brand-img {
    filter: grayscale(0);
    opacity: 1;
  }

  & .card-tag-list {
    position: absolute;
    top: 9rem;
    left: 0;
  }

  & .tire-type-wrapper {
    margin-bottom: 1rem;
  }
`;

export const BrandWrapper = styled.div`
  height: 40px;
  width: 160px;
  margin-bottom: 1.5rem;
  overflow: hidden;
`;

export const Brand = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  margin: 0 auto;
  opacity: 0.5;
  filter: grayscale(1);
  transition: all ease-in-out 0.2s;
`;

export const Specifications = styled.p`
  text-transform: uppercase;
  text-align: center;
  color: #1b2e3f;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const TireImageWrapper = styled.div`
  height: 300px;
  margin-bottom: 1.3rem;
`;

export const TireImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PriceSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid #c2d4e5;
  width: 100%;
  padding-top: 1rem;
`;

export const Price = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #1b2e3f;
  font-weight: 700;
  text-align: center;

  ${({variant}) => {
    return (
      variant === 'discount' &&
      css`
        text-decoration: line-through;
        font-size: 1rem;
      `
    );
  }}
`;
