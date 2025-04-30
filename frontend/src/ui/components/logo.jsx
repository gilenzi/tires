import styled from "styled-components"
import logo from "../../assets/tires-logo.png";

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`

const LogoImg =  styled.img`
    display: flex;
    align-items: center;
    gap: 1rem;
`


export function Logo(){
    return (
        <LogoWrapper>
            <LogoImg src={logo}  alt="logo image"/>
        </LogoWrapper>
    )
}