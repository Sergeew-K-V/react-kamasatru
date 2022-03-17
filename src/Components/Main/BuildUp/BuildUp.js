import React, { useEffect } from 'react'
import RobustWorkflow from './RobustWorkflow/RobustWorkflow'
import '../../../css/BuildUp.css'
import AOS from 'aos'

function BuildUp(props) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section className='build-up'>
      <div className='container'>
        <div className='build-up__block'>
          <div className='build-up__top' data-aos='fade-left'>
            <div className='container-smallest'>
              <h2 className='build-up__title title-middle'>Build up the whole picture</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
              </p>
            </div>
          </div>
          <div className='build-up__bottom'>
            {props.buildUpProps.arrayOfIcons.map((el) => (
              <RobustWorkflow image={el}></RobustWorkflow>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildUp
