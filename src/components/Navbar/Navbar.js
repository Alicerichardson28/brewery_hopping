import React from 'react'
import { Nav, NavLink, Logo } from "./NavbarElements"
import logo from '../../Asset/images/logo.png'

const Navbar = () => {
    return (
        <Nav>
            <Logo src={logo} alt="brewery-logo"/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Beer</NavLink>
            <NavLink to="/">Breweries</NavLink>
        </Nav>
    )
}


export default Navbar;