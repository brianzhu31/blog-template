import React from 'react'
import './ib-program.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function IBProgram() {
  return (
    <div className='ib-program'>
      <Header title='IB Program'/>
      <div className='ib-program-container'>
        <div className='ib-intro-container'>
          <div className='ib-logo-container'>
            <img src='/images/ib-logo.png' className='ib-logo'></img>
          </div>
          <div className='ib-description-container'>
            <h1>International Baccalaureate Program</h1>
            <p>The International Baccalaureate (IB) diploma program is offered at Milliken Mills, which brings students to an enriching learning experience in their Grade 11 and 12 years through the study of six subjects, with additional included core components such as the Extended Essay (EE) or Creativity, Activity, Service. Milliken Mills also offers the Pre-IB program in Grades 9 and 10.</p>
          </div>
        </div>
        <div className='ib-learn-more-container'>
          <h2>Want to learn more about the IB curriculum and their program requirements?</h2>
          <a className='learn-more-btn' href='https://www.ibo.org/programmes/diploma-programme/curriculum/'>
            Learn more
          </a>
        </div>
        <div className='courses-info-container'>
          <h2>Here are the IB courses offered at Milliken Mills High School:</h2>
          <p>(Click to enlarge)</p>
          <div className='courses-11-12-container'>
            <a href='/data/11-12-courses.pdf'>
              <img src='/images/11-12-courses.jpg' className='courses-11-12'></img>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
