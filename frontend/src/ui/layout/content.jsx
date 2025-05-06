import styled from 'styled-components';

const StyledContent = styled.div`
  flex: 1;
  padding: 0 5%;
`;

export function Content({children}) {
  return <StyledContent>{children}</StyledContent>;
}
