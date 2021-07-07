import React from 'react'
import { Nav, NavLink } from "./NavbarElements";

const Navbar = () => {
    return (
        <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Beer</NavLink>
            <NavLink to="/">Breweries</NavLink>
        </Nav>
    )
}


export default Navbar;