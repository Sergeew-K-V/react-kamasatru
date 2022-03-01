import React from 'react'

function LandingTemplate() {
  return (
    <section className='landing'>
      <div className='container-small'>
        <div className='landing__block'>
          <div className='landing__top'>
            <h1 className='landing__title title'>Landing template for startups</h1>
            <div className='landing__content'>
              <p className='landing__text'>
                Our landing page template works on all devices, so you only have to set it up once,
                and get beautiful results forever.
              </p>
              <div className='landing__btns'>
                <button className='landing__btn_get-started'></button>
                <button className='landing__btn_view-on-github'></button>
              </div>
            </div>
          </div>
          <div className='landing__bottom'></div>
        </div>
      </div>
    </section>
  )
}

export default LandingTemplate
