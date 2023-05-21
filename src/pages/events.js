import React from 'react'
import './events.css'
import EventCard from '../components/EventCard'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Events() {
  return (
    <div className='events'>
      <Header title='Events'/>
      <div className='events-content'>
        <h1>Upcoming Events:</h1>
        <p>Hover on date to see the time.</p>
        <div className='events-column'>
          <EventCard />
          <EventCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}
