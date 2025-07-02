import styled from 'styled-components';
import logo from '../../assets/tires-logo.png';
import {Menu} from './menu';

const StyeldNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3e3e3e;
`;
export function Navigation({navItems}) {
  return (
    <StyeldNavigation>
      <Menu navItems={navItems} />
    </StyeldNavigation>
  );
}
