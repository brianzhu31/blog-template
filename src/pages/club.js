import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import clubsList from "../data/clubs-list.json";
import { useLocation } from "react-router-dom";
import "./slug.css";

function Club() {
  const [club, setClub] = useState(null);

  const location = useLocation();

  useEffect(() => {
    let id = "";
    let idLength = 0;
    for (let i = location.pathname.length - 1; i >= 0; i--) {
      if (location.pathname[i] == "/") break;
      idLength += 1;
    }
    id = location.pathname.slice(-1 * idLength);
    console.log(id);

    for (let i = 0; i < clubsList.length; i++) {
      if (clubsList[i].id == id) {
        setClub((club) => clubsList[i]);
      }
    }
  }, []);

  if (!club) {
    return <div></div>;
  }

  return (
    <div className="slug">
      <Header title="Clubs" />
      <div className="slug-intro-container">
        <div className="slug-image-container">
          <img src={club.main_image} className="slug-image"></img>
        </div>
        <div className="slug-info-container">
          <h1>{club.title}</h1>
          <h2>
            <strong>Google Classroom Code:</strong> {club.gc_code}
          </h2>
          <h2>
            <strong>Instagram:</strong> @{club.ig}
          </h2>
          <h2>
            <strong>Discord:</strong> {club.dc}
          </h2>
          <h2>
            <strong>Meeting Time:</strong> {club.meeting_time}
          </h2>
        </div>
      </div>
      <div className="slug-description-container">
        <p>{club.description}</p>
      </div>
      <div className="slug-gallery">
        {club.gallery.map((image) => {
          return (
            <img className="slug-gallery-image" src={image}></img>
            )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Club;
