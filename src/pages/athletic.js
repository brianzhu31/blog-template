import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./slug.css";

function Athletic() {
  return (
    <div className="slug">
      <Header title='Athletics'/>
      <div className="slug-intro-container">
        <div className="slug-image-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" className="slug-image"></img>
        </div>
        <div className="slug-info-container">
          <h1>Name</h1>
          <h2>Google Classroom Code: </h2>
          <h2>Instagram: </h2>
          <h2>Discord: </h2>
          <h2>Meeting Time:</h2>
        </div>
      </div>
      <div className='slug-description-container'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='slug-gallery'>
        <img className='slug-gallery-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'></img>
        <img className='slug-gallery-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'></img>
        <img className='slug-gallery-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'></img>
        <img className='slug-gallery-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'></img>
      </div>
      <Footer />
    </div>
  );
}

export default Athletic;
