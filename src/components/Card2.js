import React from 'react'
import "./Card2.css";

function Card2 (props) {
  return (
    <div className="Card2">
      <div className="Card2-container">
        <div className="Card2-inside">
          <img id="Card2-img" src={props.image}></img>
          <div className="Card2-text">
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
  </div>
  )
}
export default Card2