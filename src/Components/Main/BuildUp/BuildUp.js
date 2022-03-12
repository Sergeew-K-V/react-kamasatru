import React from 'react'
import RobustWorkflow from './RobustWorkflow/RobustWorkflow'
import icon1 from '../../../img/Build-Up/BuildUp-icon1.svg'
import icon2 from '../../../img/Build-Up/BuildUp-icon2.svg'
import icon3 from '../../../img/Build-Up/BuildUp-icon1.svg'
import icon4 from '../../../img/Build-Up/BuildUp-icon4.svg'
import icon5 from '../../../img/Build-Up/BuildUp-icon5.svg'
import icon6 from '../../../img/Build-Up/BuildUp-icon6.svg'
import '../../../css/BuildUp.css'

function BuildUp() {
  return (
    <section className='build-up'>
      <div className='container'>
        <div className='build-up__block'>
          <div className='build-up__top'>
            <div className='container-smallest'>
              <h2 className='build-up__title title-middle'>Build up the whole picture</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
              </p>
            </div>
          </div>
          <div className='build-up__bottom'>
            <RobustWorkflow image={icon1}></RobustWorkflow>
            <RobustWorkflow image={icon2}></RobustWorkflow>
            <RobustWorkflow image={icon3}></RobustWorkflow>
            <RobustWorkflow image={icon4}></RobustWorkflow>
            <RobustWorkflow image={icon5}></RobustWorkflow>
            <RobustWorkflow image={icon6}></RobustWorkflow>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildUp
