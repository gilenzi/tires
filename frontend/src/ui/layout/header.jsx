import styled from "styled-components"
import { ContactInfo } from "../components/contact-info"
import { FaPhone, FaMapMarker, FaRegClock } from 'react-icons/fa';
import { Logo } from "../components/logo";
import { Navigation } from "../components/navigation";

const StyledHeader = styled.header`
    background-color: #000;
    padding: 1rem 2rem;
`
const StyledHeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const iconProps = { style: { color: 'white', fontSize: '20px' } }
export function Header(){
    return (
        <StyledHeader>
            <StyledHeaderTop>
                <Logo />
                <ContactInfo iconProps={iconProps} title={"Call us Now"} description={"+1 800-477-3327"} icon={FaPhone} />
                <ContactInfo iconProps={iconProps} title={"154 Av the good"} description={"New York 50 000"} icon={FaMapMarker} />
                <ContactInfo iconProps={iconProps} title={"Opening Times"} description={"9 AM - 5 PM"} icon={FaRegClock} />
            </StyledHeaderTop>
            <Navigation />
        </StyledHeader>
    )
}