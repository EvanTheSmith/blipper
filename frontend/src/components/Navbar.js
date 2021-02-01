import React from "react"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   return (
    <div className="navBar">
        <img className="banner" src='/banner.png' />
        <NavLink className="navLinks" to="/" exact >Home</NavLink>{" / "}
        <NavLink className="navLinks" to="/users" exact >Users</NavLink>{" / "}
        <NavLink className="navLinks" to="/users/EvanSmith" exact >Profile</NavLink>
    </div>
   )
}

export default Navbar