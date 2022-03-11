import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import navbarLogo from '../../img/Header/navbarLogo.svg'
import '../../css/Header.css'

function Header() {
  const [navbarActive, setNavbarActive] = useState(false)

  return (
    <header className='navbar'>
      <div className='container'>
        <div className='navbar__flex'>
          <a href='#' className='navbar__link_logo navbar__item'>
            <img src={navbarLogo} alt='icon' className='navbar__logo' />
          </a>
          <button
            className='navbar__btn-burger'
            onClick={() => {
              setNavbarActive(!navbarActive)
            }}
          >
            <span></span>
          </button>
          <nav
            className={
              navbarActive
                ? 'navbar__navigation navbar__item active'
                : 'navbar__navigation navbar__item'
            }
          >
            <div className='navbar__block-for-mob'>
              <div className='navbar__for-mob-top'>
                <a className='navbar__link navigation__item'>Documentation</a>
              </div>
              <div className='navbar__for-mob-bottom'>
                <button className='navbar__btn navigation__item'>
                  <a className='btn__content'>Sign up</a>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
