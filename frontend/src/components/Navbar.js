import React from "react"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   return (
    <div className="navBar">
        <img width="200px" src='/banner.png' />
        <NavLink to="/" exact >Home</NavLink>
        <NavLink to="/users" exact >Users</NavLink>
    </div>
   )
}

export default Navbar