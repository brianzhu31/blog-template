import React from 'react'
import './our-school.css'
import TimeTable from '../components/TimeTable'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function OurSchool() {
  return (
    <div className='our-school'>
      <Header title='Our School'/>
      <div className='about-us-container'>
        <h1>About Us</h1>
        <div className='about-us-text-container'>
          <p>Milliken Mills High School is located in the centre Markham by the intersection of 14th Avenue and Kennedy Rd, with an active and diverse community. There are many activities hosted our expansive and caring student base, including academic, musical, and athletic extra-curricular that are open to all. We offer a variety of subjects for students in grades 9-12 revolving around language, science, mathematics, the arts, technology, business, and physical education. Our community is notable for its caring staff and students who are accepting of all background and we welcome you to our school!</p>
        </div>
      </div>
      <div className='timetable-container'>
        <h1>Our Timetable</h1>
        <TimeTable />
      </div>
      <div className='year-calendar-container'>
        
      </div>
      <Footer />
    </div>
  )
}
