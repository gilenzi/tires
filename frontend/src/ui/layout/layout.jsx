import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyles from '../../styles/global-styles.js';

import {Footer} from './footer';
import {Header} from './header';
import {Outlet} from 'react-router';
import {Content} from './content';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <StyledLayout className="main-layout">
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  );
}
