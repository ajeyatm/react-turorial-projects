import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='left-section'>Logo</div>
      <div className='right-section'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default NavBar
