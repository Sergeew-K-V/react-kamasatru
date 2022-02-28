import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='content'>
      <header className='navbar'>
        <div className='navbar__flex'>
          <img src='' alt='icon' className='navbar__logo' />
          <span className='navbar__linkDoc'>Documentation</span>
          <button className='navbar__btn'>
            Sign up <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
