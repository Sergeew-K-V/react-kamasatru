import AOS from 'aos'
import React, { useEffect } from 'react'
import '../../../../css/DataDriven.css'

function DataDriven({ count, image }) {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  })
  if (count % 2 !== 0) {
    return (
      <div
        className='datadriven'
        data-aos='fade-right'
        data-aos-duration='2000'
        data-aos-delay='800'
      >
        <div className='datadriven__block'>
          <div className='datadriven__left_notzero'>
            <div className='left__top before-top'>LIGHTNING FAST WORKFLOW</div>
            <h3 className='left__middle'>Data-driven insights</h3>
            <p className='left__text text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='datadriven__right_notzero'>
            <img src={image} alt='workflow-image' />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div
        className='datadriven'
        data-aos='fade-left'
        data-aos-duration='2000'
        data-aos-delay='800'
      >
        <div className='datadriven__block'>
          <div className='datadriven__left_zero'>
            <img src={image} alt='workflow-image' />
          </div>
          <div className='datadriven__right_zero'>
            <div className='right__top before-top'>LIGHTNING FAST WORKFLOW</div>
            <h3 className='right__middle'>Data-driven insights</h3>
            <p className='right__text text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default DataDriven
