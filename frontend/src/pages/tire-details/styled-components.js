import styled, {css} from 'styled-components';

export const TireDetailsContainer = styled.section`
  position: relative;
  padding: 2rem 0;

  & .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  & .features-list {
    margin-top: 2rem;
  }
`;

export const TopSection = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

// export const BottomSection = styled(TopSection);

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${({theme: {device}}) => device.tablet} {
    flex-direction: row;
  }

  & > div,
  & > table {
    flex: 1;
  }
  /* flex-wrap: wrap; */
`;

export const TireImageWrapper = styled.div`
  flex: 1;
  height: calc(100vh - 200px);
  overflow: hidden;
  display: block;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const TireImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const TireDetailsWrapper = styled.div`
  flex: 1;
`;

export const BrandImageWrapper = styled.div`
  height: 50px;
  width: 220px;
  margin-bottom: 1rem;
`;

export const BrandImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: none !important;
  margin: 0 !important;
  object-position: 50% 50%;
`;

export const TireHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  color: #1b2e3f;

  & small {
    font-size: 1.75rem;
    font-weight: 900;
    color: #1b2e3f;
    display: block;
    margin: 0 0 2rem;
    padding: 0;
  }
`;

export const TypeIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
