import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #eeae08;
    height: 60px;
`;

export const Nav = styled.div`
`;



export const NavLink = styled(Link)`
    @import url("https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap");
    font-family: "Karla", sans-serif;
    color: #ffffff;
    text-decoration: none;
    padding: 10px;
    font-size: 16px;
`;

export const LogoContainer = styled.div`
    margin-left: 85px;
`

export const Logo = styled.img`
    margin-top: 60px;
    width: 90px;
    border-radius: 50%;
    border-style: solid;
    border-color: #ffffff;
`;
