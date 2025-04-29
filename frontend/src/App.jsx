import './App.css';
import {Outlet} from 'react-router';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: red;
`;

function App() {
  return (
    <>
      <StyledTitle>Tires project</StyledTitle>
      <Outlet />
    </>
  );
}

export default App;
