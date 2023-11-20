import React, { useContext, useState } from 'react'
import NavItem from './subComponents/NavItem'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo2.png"
import contactMail from "../images/contact-mail.png"
import dashboard from "../images/dashboard.png"
import register from "../images/register.png"
import details from "../images/details.png"
import homeIcon from "../images/home-icon.png"
import logout from "../images/logout.png"
import login from "../images/login.png"
import "../css/navbar.css"
import { UserContext } from "../App"

const Navbar = () => {


    const { state, dispatch } = useContext(UserContext);

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <NavItem to="/" name="Home" src={homeIcon} />
                    <NavItem to="/about" name="About" src={details} />
                    <NavItem to="/dashboard" name="Dashboard" src={dashboard} />
                    <NavItem to="/Complaint" name="Complaint" src={contactMail} />
                    <NavItem to="/logout" name="Logout" src={logout} />
                </>
            )
        } else {
            return (
                <>
                    <NavItem to="/" name="Home" src={homeIcon} />
                    {/* <NavItem to="/about" name="About" /> */}
                    {/* <NavItem to="/contact" name="Contact" /> */}
                    <NavItem to="/login" name="Login" src={login} />
                    <NavItem to="/register" name="Register" src={register} />
                </>
            )
        }
    }

    return (
        <>
            <div className='navbar-container'>
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="logo.png" style={{ height: "50px" }} />
                </NavLink>

                <div className="nav-items">
                    <RenderMenu />
                </div>

            </div>
        </>
    )
}

export default Navbar
