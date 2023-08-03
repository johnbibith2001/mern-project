import React from 'react'
import design from "./login.module.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div id={design.nav}>
        <Link to="/signin">Sign-In</Link>
        <Link to="/signup">Sign-Up</Link>
    </div>
  )
}

export default Home