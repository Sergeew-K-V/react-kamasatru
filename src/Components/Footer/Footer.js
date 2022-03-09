import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../../css/Footer.css'
import brand from '../../img/Header/navbarLogo.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__block'>
          <div className='flex__top'>
            <div className='top__brand'>
              <img src={brand} alt='brand-image' />
            </div>
            <div className='top__social'>
              <ul className='top__icons'>
                <li className='top__item'>
                  <a href=''>
                    <FontAwesomeIcon
                      className='icons'
                      width={'16px'}
                      height={'16px'}
                      icon={faFacebookF}
                    />
                  </a>
                </li>
                <li className='top__item'>
                  <a href=''>
                    <FontAwesomeIcon
                      className='icons'
                      width={'16px'}
                      height={'16px'}
                      icon={faTwitter}
                    />
                  </a>
                </li>
                <li className='top__item'>
                  <a href=''>
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
                  <a href='/#0' className='active'>
                    Contact
                  </a>
                </li>
                <li className='nav__item'>
                  <a href='/#0'>About us</a>
                </li>
                <li className='nav__item'>
                  <a href='/#0'>FAQ's</a>
                </li>
                <li className='nav__item'>
                  <a href='/#0'>Support</a>
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
