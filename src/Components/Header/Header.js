import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import navbarLogo from '../../img/navbarLogo.svg'
import '../../css/Header.css'

function Header() {
  return (
    <header className='navbar'>
      <div className='container'>
        <div className='navbar__flex'>
          <a href='#' className='navbar__link_logo navbar__item'>
            <img src={navbarLogo} alt='icon' className='navbar__logo' />
          </a>
          <nav className='navbar__navigation navbar__item'>
            <a className='navbar__link navigation__item'>Documentation</a>
            <button className='navbar__btn navigation__item'>
              <p className='btn__content'>Sign up</p>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
