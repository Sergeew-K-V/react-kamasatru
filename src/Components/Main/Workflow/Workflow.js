import React, { useEffect } from 'react'
import '../../../css/Workflow.css'
import DataDriven from './DataDriven/DataDriven'
import workFlow_1 from '../../../img/Workflow/workflow_1.png'
import workFlow_2 from '../../../img/Workflow/workflow_2.png'
import workFlow_3 from '../../../img/Workflow/workflow_3.png'
import AOS from 'aos'

function Workflow() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <section className='workflow'>
      <div className='container'>
        <div className='workflow__block'>
          <div className='workflow__top' data-aos='fade-left' data-aos-duration='2000'>
            <div className='container-smallest'>
              <h2 className='workflow__title title-middle'>Workflow that just works</h2>
              <p className='workflow__text text'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
              </p>
            </div>
          </div>
          <div className='workflow__bottom'>
            <div className='bottom__block'>
              <DataDriven count={1} image={workFlow_1}></DataDriven>
              <DataDriven count={2} image={workFlow_2}></DataDriven>
              <DataDriven count={3} image={workFlow_3}></DataDriven>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workflow
