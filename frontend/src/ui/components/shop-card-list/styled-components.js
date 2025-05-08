import styled, {css} from 'styled-components';

export const CardList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & li {
    flex: 1;
    min-width: 260px;

    & a {
      text-decoration: none;
    }
  }
`;
