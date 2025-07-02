import styled from 'styled-components';

const BrandWrapper = styled.div``;

const AboutBrandDescription = styled.p`
  color: #1b2e3f;
`;

const BrandTitle = styled.h3`
  color: #1b2e3f;
  font-size: 2rem;
  font-weight: 900;
  margin: 0;
  padding: 0 0 1rem;
`;

const BrandDescription = styled.p`
  color: #1b2e3f;
`;

export function AboutBrand({
  aboutBrandText = 'About Brand',
  brandName,
  brandDescription,
}) {
  return (
    <BrandWrapper>
      <AboutBrandDescription>{aboutBrandText}</AboutBrandDescription>
      <BrandTitle>{brandName}</BrandTitle>
      <BrandDescription>{brandDescription}</BrandDescription>
    </BrandWrapper>
  );
}
