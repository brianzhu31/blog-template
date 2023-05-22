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
            <h1>Title Here</h1>
            <h2>Subtitle Here</h2>
          </div>
        </div>
        <div className='arrow-container' data-aos='fade-down' data-aos-once="true" data-aos-delay="1000" data-aos-duration="2000">
          <h2>Learn More</h2>
          <img className='arrow' src='images/arrow.svg'></img>
        </div>
        <div className='school-intro-container' data-aos='fade-right' data-aos-once="true" data-aos-delay="500" data-aos-duration="2000">
          <div className='school-img-container'>
            <img id='school-img' src='https://media.istockphoto.com/id/932755326/photo/modern-office-buildings-made-of-glass-and-concret.jpg?s=612x612&w=0&k=20&c=GfBzrP3HF5XOwqh6sBrOo-_2Jv6pB1a77t0R3-X6L1o='></img>
          </div>
          <div className='intro-description-container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div className='school-programs-container'>
          <h1 data-aos='fade-down' data-aos-once="true" data-aos-delay="500" data-aos-duration="2000">Title Here</h1>
          <div className='programs-row' data-aos='fade-right' data-aos-once="true" data-aos-delay="500" data-aos-duration="2000">
            <div className='program-container'>
              <img className='home-ib-img' src='/images/people-icon.png'></img>
              <a className='learn-more-btn' href='/'>
                Learn more
              </a>
            </div>
            <div className='program-container' data-aos='fade-right' data-aos-once="true" data-aos-delay="1000" data-aos-duration="2000">
              <img className='home-shsm-img' src='/images/growth-icon.png'></img>
              <a className='learn-more-btn' href='/'>
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className='school-activities-container'>
          <h1 data-aos='fade-down' data-aos-once="true" data-aos-delay="500" data-aos-duration="2000">Title Here</h1>
          <div className='activities-cards-container'>
            <div className='activities-card-wrapper' data-aos='fade-right' data-aos-once="true" data-aos-delay="800" data-aos-duration="2000">
              <a href='/'>
                <Card2 title='Title Here' image='https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg'/>
              </a>
            </div>
            <div className='activities-card-wrapper' data-aos='fade-right' data-aos-once="true" data-aos-delay="1100" data-aos-duration="2000">
              <a href='/'>
                <Card2 title='Title Here' image='https://media.istockphoto.com/id/1345912457/photo/financial-stock-market-graph-selective-focus.jpg?s=612x612&w=0&k=20&c=I-XKq4_2c3rOJPezkG5J6DNbl65OVgmGbX4yrp5T7qQ='/>
              </a>
            </div>
            <div className='activities-card-wrapper' data-aos='fade-right' data-aos-once="true" data-aos-delay="1400" data-aos-duration="2000">
              <a href='/'>
                <Card2 title='Title Here' image='https://us.123rf.com/450wm/peopleimages12/peopleimages122302/peopleimages12230222251/198934672-call-center-business-and-black-man-with-computer-telemarketing-or-talking-to-help-with-tech.jpg?ver=6'/>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
