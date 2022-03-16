import React, { useState, useEffect } from 'react'
import '../../css/Header.css'
import '../../css/AdaptiveHeader.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Header(props) {
  const [navbarActive, setNavbarActive] = useState(false)
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <header data-aos='fade-right' className='navbar'>
      <div className='container'>
        <div className='navbar__flex'>
          <a href='#' className='navbar__link_logo navbar__item'>
            <img src={props.headerData.logo} alt='icon' className='navbar__logo' />
          </a>
          <button
            className={navbarActive ? 'navbar__btn-burger active' : 'navbar__btn-burger'}
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
