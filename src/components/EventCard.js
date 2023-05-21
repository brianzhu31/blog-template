import React from 'react'
import './EventCard.css'

function EventCard() {
  return (
    <div className="event-card">
      <div className="top">
          <span className="event-name">
            Show Guidance
          </span>
          <span className="event-date">
              04/10/23
              <span className="tooltiptext">
                  9:00 AM
              </span>
          </span>
      </div>
      <div className="content">
          <span className="event-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          </span>
      </div>
    </div>
  )
}

export default EventCard