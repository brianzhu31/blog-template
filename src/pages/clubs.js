import React from "react";
import "./catalogue.css";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import clubsList from "../data/clubs-list.json";

export default function Clubs() {
  return (
    <div className="clubs">
      <Header title="Catalogue" />
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
          {clubsList.map((club) => {
            return (
              <a href={"/clubs/" + club.id}>
                <Card
                  key={club.id}
                  image={club.main_image}
                  title={club.title}
                  short_description={club.short_description}
                />
              </a>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
