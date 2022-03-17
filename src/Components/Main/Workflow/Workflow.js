import React, { useEffect } from 'react'
import '../../../css/Workflow.css'
import DataDriven from './DataDriven/DataDriven'
import AOS from 'aos'

function Workflow(props) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section className='workflow'>
      <div className='container'>
        <div className='workflow__block'>
          <div className='workflow__top' data-aos='fade-left'>
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
              {props.workflowProps.arrayOfDataDriven.map((el) => (
                <DataDriven count={el.count} image={el.image}></DataDriven>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workflow
