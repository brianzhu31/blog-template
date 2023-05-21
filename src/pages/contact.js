import React from 'react'
import './contact.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className='contact'>
      <Header title='Contact'/>
      <div className='contact-container'>
        <div className='map-container'>
          <iframe className='school-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.3524770586746!2d-79.30676255973508!3d43.83833391223185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d416ee6801cb%3A0xbea050c9eaa70324!2sMilliken%20Mills%20High%20School!5e0!3m2!1sen!2sca!4v1681169860207!5m2!1sen!2sca" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='contact-info-container'>
          <p>Address: 7522 Kennedy Rd., Unionville  L3R 9S5</p>
          <p>Phone: (905) 477-0072, (647) 795-7647</p>
          <p>Fax: (905) 477-6858</p>
          <p>Email: milliken.mills.hs@yrdsb.ca</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
