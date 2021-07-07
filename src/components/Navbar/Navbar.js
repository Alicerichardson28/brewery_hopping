import React from 'react'
import {
  NavListContainer,
  NavLink,
  Logo,
  NavContainer,
  LogoContainer,
  NavIconsContainer,
} from "./NavbarElements";
import logo from '../../Asset/images/logo.png'

const Navbar = () => {
    return (
      <>
        <NavContainer>
          <NavIconsContainer>
            <NavLink to="/">icon</NavLink>
            <NavLink to="/">icon</NavLink>
          </NavIconsContainer>
          <LogoContainer>
            <Logo src={logo} alt="brewery-logo" />
          </LogoContainer>
          <NavListContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Beer</NavLink>
            <NavLink to="/">Breweries</NavLink>
          </NavListContainer>
        </NavContainer>
      </>
    );
}


export default Navbar;