import React from "react"
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
   let userName = (props.user ? props.user.username : null) // sets up the user name for the User Page
   return (
    <div className="navBar">
        <img className="banner" alt="Blipper banner" src='/banner.png' />
        <NavLink className="navLinks" to="/" exact >Home</NavLink>{" / "}
        <NavLink className="navLinks" to="users" exact >Users</NavLink>{" / "}
        <NavLink className="navLinks" to={`/users/${userName}`} exact >Profile</NavLink>
    </div>
   )
}

export default Navbar;