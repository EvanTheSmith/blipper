import React from "react"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   return (
    <div className="navBar">
        This will be my navbar
        <NavLink to="/" exact>Home</NavLink>
    </div>
   )
}

export default Navbar