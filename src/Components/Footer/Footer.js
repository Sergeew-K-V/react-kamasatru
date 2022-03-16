import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../../css/Footer.css'
import brand from '../../img/Header/navbarLogo.svg'
import { NavLink } from 'react-router-dom'
import AOS from 'aos'

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 2000 })
  })
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__block' data-aos='fade-down' data-aos-duration='2000'>
          <div className='flex__top'>
            <div className='top__brand'>
              <img src={brand} alt='brand-image' />
            </div>
            <div className='top__social'>
              <ul className='top__icons'>
                <li className='top__item'>
                  <a href='/#1'>
                    <FontAwesomeIcon
                      className='icons'
                      width={'16px'}
                      height={'16px'}
                      icon={faFacebookF}
                    />
                  </a>
                </li>
                <li className='top__item'>
                  <a href='/#2'>
                    <FontAwesomeIcon
                      className='icons'
                      width={'16px'}
                      height={'16px'}
                      icon={faTwitter}
                    />
                  </a>
                </li>
                <li className='top__item'>
                  <a href='/#3'>
                    <FontAwesomeIcon
                      className='icons'
                      width={'16px'}
                      height={'16px'}
                      icon={faInstagram}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex__bottom'>
            <div className='bottom__copyright'>
              Made by <span className='bottom__nickname'>Fobelend</span>. All right reserved
            </div>
            <nav className='bottom__nav'>
              <ul>
                <li className='nav__item'>
                  <NavLink
                    to='/contact'
                    className={(navData) => (navData.isActive ? 'active' : '')}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink to='/about' className={(navData) => (navData.isActive ? 'active' : '')}>
                    About us
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink to='/faq' className={(navData) => (navData.isActive ? 'active' : '')}>
                    FAQ's
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink
                    to='/support'
                    className={(navData) => (navData.isActive ? 'active' : '')}
                  >
                    Support
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
