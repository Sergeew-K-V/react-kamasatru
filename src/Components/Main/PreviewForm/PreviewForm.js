import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../css/PreviewForm.css'
import AOS from 'aos'

function PreviewForm(props) {
  useEffect(() => {
    AOS.init()
  }, [])

  const inputEmail = React.createRef()

  const sendEmail = () => {
    const text = inputEmail.current.value
    props.formProps.message(text)
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
