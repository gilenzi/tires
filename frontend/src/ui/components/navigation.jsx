import styled from "styled-components"
import logo from "../../assets/tires-logo.png";
import { Menu } from "./menu";

const StyeldNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #3E3E3E;
`
export function Navigation(){
    const navItems = 
    [
        {
            text: "Home",
            link: "/",
            children: []
        },
        {
            text: "About us",
            link: "/about-us",
            children: []
        },
        {
            text: "Services",
            link: "/services",
            children: [
                {
                    text: "Tire Rotation Services",
                    link: "/tire-rotation-services",
                    children: []
                },
                {
                    text: "Tire Alignment Services",
                    link: "/tire-alignment-services",
                    children: [
                        {
                            text: "Shop",
                            link: "/shop",
                            children: []
                        },
                        {
                            text: "Contact Us",
                            link: "/contact-us",
                            children: []
                        }
                    ]
                },
            ]
        },
        {
            text: "Shop",
            link: "/shop",
            children: []
        },
        {
            text: "Contact Us",
            link: "/contact-us",
            children: []
        }
    ]
  
    return (
        <StyeldNavigation>
            <Menu navItems={navItems} />
        </StyeldNavigation>
    )
}