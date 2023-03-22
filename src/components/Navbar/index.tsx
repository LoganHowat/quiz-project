import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <header>
        <nav className="navbar">
            <input type="checkbox" id="isChecked" />
            <label htmlFor="isChecked" className="menu-btn">
                <i className="fas fa-bars"></i>
            </label>
            <a href="connekt.html" className="logo">Connekt</a>
            <ul className="links">
                <li><a href="./index.html" className="feed">Your Feed</a></li>
                <li><a href="./post.html" className="create">Create A Post +</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar