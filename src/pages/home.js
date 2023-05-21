import React, {useEffect} from 'react'
import Footer from '../components/Footer';
import Card2 from '../components/Card2';
import './home.css';
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Home() {

  useEffect(() => {
    Aos.init()
  }, [])

  useEffect(() => {
    
    const bg = document.getElementById('school-img')
    window.addEventListener('scroll', function(){
      bg.style.transform = "rotate("+ (window.pageYOffset/70) + "deg) " 
    })

  })

  return (
    <>
      <div className='home'>
        <div className='heading-container'>
          <div className='school-name-text-container'>
            <h1>Milliken Mills</h1>
            <h2>High School</h2>
          </div>
        </div>
        <div className='arrow-container' data-aos='fade-down' data-aos-once="true" data-aos-delay="1000" data-aos-duration="2000">
          <h2>Learn More</h2>
          <img className='arrow' src='images/arrow.svg'></img>
        </div>
        <div className='school-intro-container' data-aos='fade-right' data-aos-once="true" data-aos-delay="500" data-aos-duration="2000">
          <div className='school-img-container'>
            <img id='school-img' src='images/front-school.jpg'></img>
          </div>
          <div className='intro-description-container'>
            <p>Milliken Mills High School teaches students in grades 9-12 and runs on a semester timetable September through June. Students often like to gather in the atrium of our school for events that are often held there. It is located next to Milliken Mills Community Centre, featuring a pool and a library, which students also often use in their daily lives.</p>
          </div>
        </div>
        <div className='school-programs-container'>
          <h1 data-aos='fade-down' data-aos-once="true" data-aos-delay="500" data-aos-duration="2000">Our specialty programs</h1>
          <div className='programs-row' data-aos='fade-right' data-aos-once="true" data-aos-delay="500" data-aos-duration="2000">
            <div className='program-container'>
              <img className='home-ib-img' src='/images/ib-logo.png'></img>
              <a className='learn-more-btn' href='./ib-program'>
                Learn more
              </a>
            </div>
            <div className='program-container' data-aos='fade-right' data-aos-once="true" data-aos-delay="1000" data-aos-duration="2000">
              <img className='home-shsm-img' src='/images/shsm.jpeg'></img>
              <a className='learn-more-btn' href='./shsm'>
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className='school-activities-container'>
          <h1 data-aos='fade-down' data-aos-once="true" data-aos-delay="500" data-aos-duration="2000">Browse our activities</h1>
          <div className='activities-cards-container'>
            <div className='activities-card-wrapper' data-aos='fade-right' data-aos-once="true" data-aos-delay="800" data-aos-duration="2000">
              <a href='/clubs'>
                <Card2 title='Clubs' image='https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'/>
              </a>
            </div>
            <div className='activities-card-wrapper' data-aos='fade-right' data-aos-once="true" data-aos-delay="1100" data-aos-duration="2000">
              <a href='/athletics'>
                <Card2 title='Athletics' image='/images/volleyball.JPG'/>
              </a>
            </div>
            <div className='activities-card-wrapper' data-aos='fade-right' data-aos-once="true" data-aos-delay="1400" data-aos-duration="2000">
              <a href='/events'>
                <Card2 title='Events' image='/images/semi.jpg'/>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
