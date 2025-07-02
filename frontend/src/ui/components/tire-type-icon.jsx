import styled from 'styled-components';
import SummerIcon from '../../assets/icon-summer-fill.svg';
import WinterIcon from '../../assets/icon-winter.svg';
import AllSeasonIcon from '../../assets/icon-summer-winter-fill.svg';
import SideCarIcon from '../../assets/icon-car-side.svg';

const IconWrapper = styled.div`
  height: 35px;
  width: 35px;
`;

const Icon = styled.img`
  height: 100%;
  width: 100%;
`;

export function TireTypeIcon({type = 'summer'}) {
  const iconsMap = {
    Summer: SummerIcon,
    Winter: WinterIcon,
    'All-Season': AllSeasonIcon,
    car: SideCarIcon,
  };

  const icon = iconsMap[type];

  if (!icon) return null;

  return (
    <IconWrapper className="tire-type-wrapper">
      <Icon src={icon} />
    </IconWrapper>
  );
}
