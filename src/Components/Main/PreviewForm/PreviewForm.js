import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../css/PreviewForm.css'

function PreviewForm(props) {
  const inputEmail = useRef(null)

  const sendEmail = () => {
    const text = inputEmail.current.value
    props.formProps.message(text)
    inputEmail.current.value = ''
  }
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
              <input type='email' placeholder={`Your best email`} ref={inputEmail} />
              <FontAwesomeIcon icon={props.formProps.icon} className='icon' onClick={sendEmail} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreviewForm
