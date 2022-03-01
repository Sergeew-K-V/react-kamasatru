import React from 'react'
import '../../../css/LandingTemplate.css'

function LandingTemplate() {
  return (
    <section className='landing'>
      <div className='container-small'>
        <div className='landing__block'>
          <div className='landing__top'>
            <h1 className='landing__title title-big '>
              Landing template for
              <span className='span-bold'> startups</span>
            </h1>
            <div className='container-smallest'>
              <p className='landing__text text'>
                Our landing page template works on all devices, so you only have to set it up once,
                and get beautiful results forever.
              </p>
              <div className='landing__btns'>
                <div className='landing__btn'>
                  <a
                    href='https://drive.google.com/file/d/1tV-jo-2W6nw5ea2DFEE5YLdg37tWnWKv/view?usp=sharing'
                    target='_blank'
                    className='landing__btn_get-started'
                  >
                    Get started
                  </a>
                  <a
                    href='https://github.com/Sergeew-K-V'
                    target='_blank'
                    className='landing__btn_view-on-github'
                  >
                    View on Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='landing__bottom'>
            <a
              href='#0'
              data-video='https://player.vimeo.com/video/174002812'
              className='landing__video'
            >
              <img
                src='https://open.cruip.com/static/media/video-placeholder.a622fc5d.jpg'
                alt=''
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingTemplate
