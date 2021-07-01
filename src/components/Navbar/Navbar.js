import React from 'react'
import { Nav, NavLink } from "./NavbarElements";

const Navbar = () => {
    return (
        <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Brewery</NavLink>
            <NavLink to="/">Product</NavLink>
            <NavLink to="/">Contact</NavLink>
        </Nav>
    )
}


export default Navbar;