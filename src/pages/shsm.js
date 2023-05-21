import React from 'react'
import './shsm.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Shsm() {
  return (
    <div className='shsm'>
      <Header title='SHSM'/>
      <div className='shsm-content'>
        <div className='shsm-logo-container'>
          <img className='shsm-logo' src='images/shsm.jpeg'></img>
        </div>
        <div className='shsm-description'>
          <p>The Specialist High Skills Major (SHSM) is a specialized, ministry-approved program for students to gain a head start on their career by participating in a variety of learning opportunities.  This program also allows eager students to focus their knowledge and interests to better enrich their learning in Grade 11 and 12. This program is available to students pursuing all pathways: university, workplace, college and apprenticeship.</p>
          <p>This program also grants you a red seal on your Ontario Secondary School Diploma (OSSD), which can help you in your learning experience and career opportunities. Students can start joining SHSM in grade 11; keep an ear out for announcements!</p>
          <p>Milliken offers: Business, Environment, Health and Wellness</p>
          <p>Keep a heads-up for more information on SHSM throughout the school year.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
