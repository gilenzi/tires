import styled from 'styled-components';
import {ContactInfo} from '../components/contact-info';
import {FaPhone, FaMapMarker, FaRegClock} from 'react-icons/fa';
import {Logo} from '../components/logo';
import {Navigation} from '../components/navigation';
import {ThemeToggle} from '../components/theme-toggle';

const StyledHeader = styled.header`
  background-color: #fff;
  color: #333;
  padding: 1rem 2rem;

  html[data-theme='dark'] & {
    background-color: #1f2023;
    color: #dadada;
  }
`;
const StyledHeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledThemeToggle = styled(ThemeToggle)`
  margin-left: auto;
`;

const iconProps = {style: {color: 'white', fontSize: '20px'}};

export function Header() {
  return (
    <StyledHeader>
      <StyledHeaderTop>
        <Logo />
        <ContactInfo
          iconProps={iconProps}
          title={'Call us Now'}
          description={'+1 800-477-3327'}
          icon={FaPhone}
        />
        <ContactInfo
          iconProps={iconProps}
          title={'154 Av the good'}
          description={'New York 50 000'}
          icon={FaMapMarker}
        />
        <ContactInfo
          iconProps={iconProps}
          title={'Opening Times'}
          description={'9 AM - 5 PM'}
          icon={FaRegClock}
        />
        <StyledThemeToggle />
      </StyledHeaderTop>
      <Navigation />
    </StyledHeader>
  );
}
