import React from 'react'
import NavbarTop from './NavbarTop/NavbarTop'

function Navbar() {
  return (
    <div className='content'>
      <header className='header'>
        <NavbarTop></NavbarTop>
        <div className='header__midle'></div>
        <div className='header__bottom'></div>
      </header>
    </div>
  )
}

export default Navbar
