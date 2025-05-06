import styled from 'styled-components';
import logo from '../../assets/tires-logo.png';
import logoLight from '../../assets/tires-logo-light2.png';
import {useThemeMode} from '../../hooks/theme-mode';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const LogoImg = styled.img`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: auto;
  max-height: 100px;
`;

export function Logo() {
  const {theme} = useThemeMode();

  const logoImg = theme.mode === 'dark' || theme.mode === '' ? logo : logoLight;

  return (
    <LogoWrapper>
      <LogoImg src={logoImg} alt="logo image" />
    </LogoWrapper>
  );
}
