import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png";

function HeaderLogo() {
  return (
    <Link to="/" className="header-logo">
    <img src={logo} alt="logo" />
  </Link>
  )
}

export default HeaderLogo