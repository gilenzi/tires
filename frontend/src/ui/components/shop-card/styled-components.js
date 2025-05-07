import styled, {css} from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid #c2d4e5;
`;

export const Brand = styled.img`
  max-height: 50px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const Specifications = styled.p`
  text-transform: uppercase;
  text-align: center;
  color: #1b2e3f;
`;

export const TireImage = styled.img`
  max-height: 300px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const PriceSection = styled.div`
  border-top: 1px solid #333;
`;

export const Price = styled.span`
  display: block;
  font-size: 1.25rem;
  color: #1b2e3f;
  font-weight: 500;
  text-align: center;
`;
