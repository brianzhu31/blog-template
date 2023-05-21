import React from "react";
import "./catalogue.css";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Athletics() {
  return (
    <div className="athletics">
      <Header title='Athletics'/>
      <div className="catalogue-content">
        <div className="searchbar-container">
          <div class="searchbar">
            <input
              className="input"
              placeholder="Search"
              required=""
              type="text"
            />
            <span class="input-border"></span>
          </div>
        </div>
        <div className="table-container">
          {/* DIVS OF CARD COMPONENTS GO HERE */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
