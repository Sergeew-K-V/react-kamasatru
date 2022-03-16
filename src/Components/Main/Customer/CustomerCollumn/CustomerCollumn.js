import AOS from 'aos'
import React, { useEffect } from 'react'
import '../../../../css/CustomerCollumn.css'

function CustomerCollumn(props) {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div className='customer-collumn'>
      <div className='customer-collumn__block' data-aos='fade-left'>
        <div className='customer-collumn__top'>
          <p className='top__text'>
            — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
          </p>
        </div>
        <div className='customer-collumn__bottom'>
          <p className='bottom__text'>
            {props.nickname}
            <span className='color-default'> / </span>
            <span className='green'>AppName</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CustomerCollumn
