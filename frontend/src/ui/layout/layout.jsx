import styled from "styled-components";
import { Footer } from "./footer";
import { Header } from "./header";
import {Outlet} from 'react-router';
import { Content } from "./content";

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
`

export function Layout({children}){
    return (
        <StyledLayout className="main-layout">
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </StyledLayout>
    )
}