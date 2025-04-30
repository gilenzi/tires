import styled from "styled-components"
import { FaPhone, FaMapMarker, FaRegClock } from 'react-icons/fa';
import { Logo } from "../components/logo";
import { Menu } from "../components/menu";
import { Row } from "./row";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;

    background-color: #000;
    padding: 1rem 2rem;
`
const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const FooterTitle = styled.h4`
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
`

const FooterDescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const FooterDescField = styled.div`
    display: flex;
    gap: 1rem;
`

const FooterDescFieldTitle = styled.p`
     color: #fff;
     text-transform: uppercase;
`

const FooterDescFieldText = styled.p`
     color: #fff;
     text-transform: uppercase;
`

const FooterCopyRight = styled.p`
     color: #fff;
`

export function Footer(){
    const footerMenuItems = [
        {
            text: "Home",
            link: "/",
            children: []
        },
        {
            text: "Contact Us",
            link: "/contact-us",
            children: []
        },
    ]
    return (
        <StyledFooter>
            <Row>
                <Logo />
                <FooterDescWrapper>
                    <FooterTitle>
                        Get in touch
                    </FooterTitle>
                    <FooterDescField>
                        <FooterDescFieldTitle>PHONE</FooterDescFieldTitle>
                        <FooterDescFieldText>+1 123 457 653</FooterDescFieldText>
                    </FooterDescField>
                    <FooterDescField>
                        <FooterDescFieldTitle>FAX</FooterDescFieldTitle>
                        <FooterDescFieldText>+1 123 457 653</FooterDescFieldText>
                    </FooterDescField>
                    <FooterDescField>
                        <FooterDescFieldTitle>EMAIL</FooterDescFieldTitle>
                        <FooterDescFieldText> our-mail@example.com</FooterDescFieldText>
                    </FooterDescField>
                    <FooterDescField>
                        <FooterDescFieldTitle>Adress</FooterDescFieldTitle>
                        <FooterDescFieldText>121 King Street, Melbourne 3000 Australia</FooterDescFieldText>
                    </FooterDescField>
            </FooterDescWrapper>
            </Row>

            <FooterBottom>
                <Menu navItems={footerMenuItems} />
                <FooterCopyRight>
                © 2025 Tires & Wheels All rights reserved.
                </FooterCopyRight>
            </FooterBottom>
        </StyledFooter>
    )
}