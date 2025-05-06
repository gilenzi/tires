import styled from 'styled-components';
import {Link} from 'react-router';
import {FaGreaterThan} from 'react-icons/fa';

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  transition: all 0.3s ease;
`;

const NavListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  &.sub-menu-host-item {
    & .icon-wrapper {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: rotate(90deg) translate(0, 50%);
    }
  }

  & ul {
    position: absolute;
    top: 100%;
    left: 1rem;
    flex-direction: column;
    background-color: #333;
    visibility: hidden;
    opacity: 0;

    & li {
      padding: 0.5rem;
    }
  }

  &:hover > ul {
    visibility: visible;
    opacity: 1;
  }
`;

const NavLink = styled(Link)`
  font-size: 0.9rem;
  color: #1f2023;
  text-decoration: none;

  html[data-theme='dark'] & {
    color: #dadada;
  }
`;

function RecursiveMenu({items, isSubMenu = false}) {
  const hasSubMenu = (item) => item.children && item.children.length > 0;

  return (
    <NavList className={isSubMenu ? 'sub-menu' : ''}>
      {items.map((item) => (
        <NavListItem
          key={item.link}
          className={hasSubMenu(item) > 0 ? 'sub-menu-host-item' : ''}
        >
          <NavLink to={item.link}>{item.text}</NavLink>
          {hasSubMenu(item) && (
            <div className="icon-wrapper">
              <FaGreaterThan className="open-submenu" />
            </div>
          )}
          {hasSubMenu(item) > 0 && (
            <RecursiveMenu items={item.children} isSubMenu={true} />
          )}
        </NavListItem>
      ))}
    </NavList>
  );
}

export function Menu({navItems}) {
  return <RecursiveMenu items={navItems} />;
}
