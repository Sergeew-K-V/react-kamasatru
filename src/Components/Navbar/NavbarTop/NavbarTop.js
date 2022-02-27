import React from 'react'
import '../../../css/NavbarTop.css'

function NavbarTop() {
  return (
    <div className='navbarTop__flex'>
      <nav className='navbarTop__menu'>
        <ul className='menu__list'>
          <li className='menu__item'>About</li>
          <li className='menu__item'>Reviews</li>
          <li className='menu__item'>Delivery</li>
          <li className='menu__item'>How to pay</li>
          <li className='menu__item'>Contacts</li>
          <li className='menu__item'>Installment plan</li>
        </ul>
      </nav>
      <form className='navbarTop__form'>
        <div className='form__block'>
          <input type='search' className='form__input' />
          <button type='submit'>
            <span>
              <i className='form__icon'></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default NavbarTop
