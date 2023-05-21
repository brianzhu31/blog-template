import { InsertEmoticon } from "@mui/icons-material";
import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <div className="card-border">
        <div className="card-container">
          <div className="card-img-container">
            <img className="card-img" src={props.image}></img>
          </div>
          <div className="card-info-container">
            <h3>{props.title}</h3>
            <p>{props.short_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
