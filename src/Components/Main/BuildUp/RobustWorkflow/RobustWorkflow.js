import AOS from 'aos'
import React, { useEffect } from 'react'
import '../../../../css/RobustWorkflow.css'

function RobustWorkflow(props) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div data-aos='fade-right' className='robust__block'>
      <div className='robust__flex'>
        <div className='robust__top'>
          <img src={props.image} alt='picture workflow' />
        </div>
        <div className='robust__bottom'>
          <h4 className='robust__title title'>Robust Workflow</h4>
          <p className='robust__text text'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RobustWorkflow
