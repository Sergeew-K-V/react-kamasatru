import AOS from 'aos'
import React, { useEffect } from 'react'
import '../../../css/Customer.css'
import CustomerCollumn from './CustomerCollumn/CustomerCollumn'

function Customer(props) {
  useEffect(() => {
    AOS.init()
  })
  return (
    <section className='customer'>
      <div className='container'>
        <div className='customer__block'>
          <div className='block__top' data-aos='fade-right'>
            <div className='container-smallest'>
              <div className='top__title title-middle'>Customer testimonials</div>
              <div className='top__text text'>
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus
                nulla at volutpat diam ut venenatis tellus—in ornare.
              </div>
            </div>
          </div>
          <div className='block__bottom'>
            {props.customerProps.arrayOfCustomersCollumn.map((el) => (
              <CustomerCollumn nickname={`${el.name}`}></CustomerCollumn>
            ))}
            {/* <CustomerCollumn nickname={`Roman Level`}></CustomerCollumn>
            <CustomerCollumn nickname={`Diana Rynzhuk`}></CustomerCollumn>
            <CustomerCollumn nickname={`Ben Stafford`}></CustomerCollumn> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customer
