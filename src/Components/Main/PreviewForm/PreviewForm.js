import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../../../css/PreviewForm.css'

function PreviewForm() {
  return (
    <section className='preview-form'>
      <div className='container'>
        <div className='preview-form__block'>
          <div className='preview-form__slogan'>
            <h3>For previewing layouts and visual?</h3>
          </div>
          <div className='preview-form__action'>
            <label className='action__label'></label>
            <div className='action__input'>
              <input type='email' placeholder={`Your best email`} />
              <FontAwesomeIcon icon={faArrowRight} className='icon' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreviewForm
