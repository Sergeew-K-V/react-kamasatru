import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../css/PreviewForm.css'
import AOS from 'aos'

function PreviewForm(props) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section className='preview-form'>
      <div className='container'>
        <div className='preview-form__block' data-aos='fade-right'>
          <div className='preview-form__slogan'>
            <h3>For previewing layouts and visual?</h3>
          </div>
          <div className='preview-form__action'>
            <label className='action__label'></label>
            <div className='action__input'>
              <input type='email' placeholder={`Your best email`} />
              <FontAwesomeIcon icon={props.formProps.icon} className='icon' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreviewForm
