import styled from 'styled-components';
import {FaStar} from 'react-icons/fa';
import fuelIcon from '../../../assets/fuel-light.svg';
import soundIcon from '../../../assets/sound-light.svg';
import warrantyIcon from '../../../assets/icon-warranty.svg';

const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: ${({orientation}) =>
    orientation === 'horizontal' ? 'row' : 'column'};
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const FeatureWrapper = styled.div`
  display: flex;
  /* flex-direction: ${({orientation}) =>
    orientation === 'horizontal' ? 'row' : 'column'}; */
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
`;

const FeatureImg = styled.img`
  height: 27px;
  width: 27px;
`;

const FeatureTextWrapper = styled.div`
  /* flex-direction: ${({orientation}) =>
    orientation === 'horizontal' ? 'row' : 'column'}; */
  /* clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 11% 50%, 25% 0%); */
  /* clip-path: polygon(0% 0%, 75% 0%, 80% 50%, 75% 100%, 0% 100%); */
  clip-path: ${({arrow}) =>
    arrow === 'left'
      ? 'polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 11% 50%, 25% 0%)'
      : 'polygon(0% 0%, 75% 0%, 90% 50%, 75% 100%, 0% 100%)'};

  background-color: #000;
  /* padding: 0 0.5rem 0 1.2rem; */
  padding: ${({arrow}) =>
    arrow === 'right' ? '0 2rem 0 0.2rem' : '0 0.5rem 0 1.2rem'};
  font-size: 0.75rem;
  color: #fff;
`;

export function ShopCardFeaturesList({
  data: {qualityClass, noise, consumption, warranty},
  orientation = 'horizontal',
  arrow = 'left',
}) {
  return (
    <FeaturesWrapper className="features-list" orientation={orientation}>
      {qualityClass && (
        <FeatureWrapper orientation={orientation}>
          <FaStar color="#1766a7" style={{width: '27px', height: '27px'}} />
          <FeatureTextWrapper arrow={arrow}>{qualityClass}</FeatureTextWrapper>
        </FeatureWrapper>
      )}
      {noise && (
        <FeatureWrapper orientation={orientation}>
          <FeatureImg src={soundIcon} alt="sound icon" />
          <FeatureTextWrapper arrow={arrow}>{noise}</FeatureTextWrapper>
        </FeatureWrapper>
      )}
      {consumption && (
        <FeatureWrapper orientation={orientation}>
          <FeatureImg src={fuelIcon} alt="consumption icon" />
          <FeatureTextWrapper arrow={arrow}>{consumption}</FeatureTextWrapper>
        </FeatureWrapper>
      )}
      {warranty && (
        <FeatureWrapper orientation={orientation}>
          <FeatureImg src={warrantyIcon} alt="warranty icon" />
          <FeatureTextWrapper arrow={arrow}>{warranty}</FeatureTextWrapper>
        </FeatureWrapper>
      )}
    </FeaturesWrapper>
  );
}
