import React from 'react'
import {
  Nav,
  NavLink,
  Logo,
  NavContainer,
  LogoContainer,
} from "./NavbarElements";
import logo from '../../Asset/images/logo.png'

const Navbar = () => {
    return (
      <>
        <NavContainer>
          <Nav>
            <NavLink to="/">icon</NavLink>
            <NavLink to="/">icon</NavLink>
          </Nav>
          <LogoContainer>
            <Logo src={logo} alt="brewery-logo" />
          </LogoContainer>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Beer</NavLink>
            <NavLink to="/">Breweries</NavLink>
          </Nav>
        </NavContainer>
      </>
    );
}


export default Navbar;